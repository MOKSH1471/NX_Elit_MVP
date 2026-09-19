'use client';

import React, { useId, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BP } from '@/lib/motion-tokens';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  tint: string;
  heading: string;
  children: React.ReactNode;
  className?: string;
}

export function ArcReveal({ tint, heading, children, className = '' }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const textSvg = useRef<SVGSVGElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const rawId = useId();
  const pathId = `arc-path-${rawId.replace(/:/g, '')}`;

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        if (overlay.current) gsap.set(overlay.current, { display: 'none' });
        if (content.current) gsap.set(content.current, { opacity: 1, pointerEvents: 'auto' });
        return;
      }

      const mm = gsap.matchMedia();

      // DESKTOP: Scrubbed Pin Timeline
      mm.add(BP.desktop, () => {
        if (!root.current || !overlay.current || !content.current) return;

        // Content is completely hidden BEFORE arc reveal
        gsap.set(content.current, { opacity: 0, pointerEvents: 'none' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=125%',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. Arc dome rises up from bottom, overlaying the previous section with bold white text
        // The venue content behind remains 100% invisible (opacity: 0)
        tl.fromTo(
          overlay.current,
          {
            yPercent: 100,
            borderTopLeftRadius: '50% 28vh',
            borderTopRightRadius: '50% 28vh',
            opacity: 1,
          },
          {
            yPercent: 0,
            ease: 'none',
            duration: 1.0,
          }
        );

        // 2. Becomes the whole rectangle to cover the screen & text fades
        tl.to(
          overlay.current,
          {
            borderTopLeftRadius: '0% 0px',
            borderTopRightRadius: '0% 0px',
            ease: 'none',
            duration: 0.35,
          },
          '>-0.05'
        );

        if (textSvg.current) {
          tl.to(
            textSvg.current,
            {
              opacity: 0,
              y: -24,
              ease: 'none',
              duration: 0.25,
            },
            '<'
          );
        }

        // 3. Fades away to reveal the section behind
        tl.to(
          overlay.current,
          {
            opacity: 0,
            ease: 'none',
            duration: 0.65,
          },
          '>'
        );

        // 4. Section behind fades IN ONLY AFTER the arc has covered the screen and starts fading away!
        tl.fromTo(
          content.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            ease: 'none',
            duration: 0.65,
            onUpdate: function () {
              if (content.current) {
                content.current.style.pointerEvents = this.progress() > 0.4 ? 'auto' : 'none';
              }
            },
          },
          '<'
        );
      });

      // MOBILE: Unpinned smooth scroll (Never pin on mobile — Constraint 8)
      mm.add('(max-width: 1023px)', () => {
        if (!root.current || !overlay.current || !content.current) return;

        gsap.set(content.current, { opacity: 0, pointerEvents: 'none' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top 85%',
            end: 'center 35%',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.fromTo(
          overlay.current,
          {
            yPercent: 100,
            borderTopLeftRadius: '50% 16vh',
            borderTopRightRadius: '50% 16vh',
            opacity: 1,
          },
          {
            yPercent: 0,
            ease: 'none',
            duration: 1.0,
          }
        );

        tl.to(
          overlay.current,
          {
            borderTopLeftRadius: '0% 0px',
            borderTopRightRadius: '0% 0px',
            opacity: 0,
            ease: 'none',
            duration: 0.6,
          },
          '>'
        );

        tl.fromTo(
          content.current,
          { opacity: 0 },
          {
            opacity: 1,
            ease: 'none',
            duration: 0.6,
            onUpdate: function () {
              if (content.current) {
                content.current.style.pointerEvents = this.progress() > 0.4 ? 'auto' : 'none';
              }
            },
          },
          '<'
        );
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className={`relative min-h-screen w-full overflow-hidden ${className}`}>
      {/* Section Content Behind: Strictly 100% hidden, only revealed after arc overlay */}
      <div
        ref={content}
        className="relative z-10 min-h-screen flex items-center justify-center pt-16 pb-24 px-4 sm:px-8 will-change-transform"
        style={{ opacity: 0, pointerEvents: 'none' }}
      >
        {children}
      </div>

      {/* The Arc Curtain Overlay: sweeps over the parts, becomes a full rectangle, then fades away */}
      <div
        ref={overlay}
        className="absolute inset-0 z-20 flex flex-col items-center justify-start pointer-events-none will-change-transform"
        style={{
          backgroundColor: tint,
          borderTopLeftRadius: '50% 28vh',
          borderTopRightRadius: '50% 28vh',
        }}
      >
        {/* Curved Bold White Text along the Dome Arch */}
        <div className="w-full flex justify-center pt-4 sm:pt-8 lg:pt-12 px-2 sm:px-4">
          <svg
            ref={textSvg}
            viewBox="0 0 1400 300"
            className="w-full max-w-[98vw] h-36 sm:h-48 lg:h-64 overflow-visible select-none"
          >
            <defs>
              <path id={pathId} d="M 40 250 Q 700 25 1360 250" fill="none" />
            </defs>
            <text
              className="font-cinzel uppercase font-bold tracking-[0.2em]"
              fill="#ffffff"
              fontSize="54"
              letterSpacing="4"
              style={{
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.98))',
              }}
            >
              <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
                {heading}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
