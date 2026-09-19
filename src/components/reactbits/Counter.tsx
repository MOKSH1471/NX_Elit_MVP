'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  value: number;
  className?: string;
}

export function Counter({ value, className = '' }: CounterProps) {
  const el = useRef<HTMLSpanElement>(null);
  const obj = useRef({ val: 0 });

  useGSAP(
    () => {
      if (!el.current) return;

      gsap.to(obj.current, {
        val: value,
        ease: 'none',
        scrollTrigger: {
          trigger: el.current,
          start: 'top 95%',
          end: 'bottom 45%',
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: () => {
            if (el.current) {
              el.current.textContent = Math.round(obj.current.val).toLocaleString();
            }
          },
        },
      });
    },
    { scope: el, dependencies: [value] }
  );

  return (
    <span ref={el} className={`font-space tabular-nums ${className}`}>
      0
    </span>
  );
}
