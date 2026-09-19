'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BEVEL_OPEN = 'polygon(0% 0%, 82% 0%, 100% 14%, 100% 100%, 0% 100%)';
const BEVEL_CLOSED = 'polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%)';

interface BevelPanelProps {
  tint?: string;
  children: React.ReactNode;
  className?: string;
}

export function BevelPanel({ tint = '#09090b', children, className = '' }: BevelPanelProps) {
  const container = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current || !panel.current) return;
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        gsap.set(panel.current, { yPercent: 0, clipPath: 'none' });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        panel.current,
        {
          yPercent: 100,
          clipPath: BEVEL_OPEN,
        },
        {
          yPercent: 0,
          clipPath: BEVEL_CLOSED,
          ease: 'none',
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className={`relative min-h-screen w-full overflow-hidden ${className}`}>
      <div
        ref={panel}
        className="w-full min-h-screen relative z-10 will-change-transform"
        style={{ backgroundColor: tint }}
      >
        {children}
      </div>
    </div>
  );
}
