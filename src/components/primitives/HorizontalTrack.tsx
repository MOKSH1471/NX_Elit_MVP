'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BP } from '@/lib/motion-tokens';

gsap.registerPlugin(ScrollTrigger);

export function HorizontalTrack({
  children,
  className = '',
  onProgress,
}: {
  children: React.ReactNode;
  className?: string;
  onProgress?: (progress: number) => void;
}) {
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      const mm = gsap.matchMedia();

      mm.add(BP.desktop, () => {
        const el = track.current;
        if (!el || !section.current) return;

        const distance = () => Math.max(0, el.scrollWidth - window.innerWidth);

        gsap.to(el, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section.current,
            start: 'top top',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onToggle: (self) => {
              el.style.willChange = self.isActive ? 'transform' : 'auto';
            },
            onUpdate: (self) => {
              onProgress?.(self.progress);
            },
          },
        });

        // Bounded subtle parallax: max travel 40px, never breaks grid layout
        gsap.utils.toArray<HTMLElement>('[data-rate]', el).forEach((layer) => {
          const rate = parseFloat(layer.dataset.rate || '1');
          const maxShift = 40;
          const shift = (1 - rate) * maxShift;

          gsap.fromTo(
            layer,
            { x: shift },
            {
              x: -shift,
              ease: 'none',
              scrollTrigger: {
                trigger: section.current,
                start: 'top top',
                end: () => `+=${distance()}`,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            }
          );
        });
      });
    },
    { scope: section }
  );

  return (
    <div ref={section} className={`relative min-h-screen overflow-hidden max-lg:h-auto max-lg:overflow-visible ${className}`}>
      <div
        ref={track}
        className="flex h-full w-max items-center max-lg:w-full max-lg:flex-col max-lg:overflow-visible"
      >
        {children}
      </div>
    </div>
  );
}
