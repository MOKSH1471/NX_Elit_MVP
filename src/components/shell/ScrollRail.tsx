'use client';

import React from 'react';
import { useScrollJourney } from '@/lib/scroll/ScrollProvider';
import { INK } from '@/lib/scroll/scenes';

export function ScrollRail() {
  const { progress, scene } = useScrollJourney();
  const pct = Math.round(progress * 100);

  return (
    <div
      className="fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-6 lg:flex pointer-events-none select-none"
      style={{ color: INK[scene.contrast], transition: 'color 600ms cubic-bezier(.4,0,.2,1)' }}
      aria-hidden
    >
      <span className="h-24 w-px bg-current opacity-35" />
      <span className="font-space text-[11px] tabular-nums tracking-[0.2em]">
        {String(pct).padStart(2, '0')}
      </span>
      <span className="h-24 w-px bg-current opacity-35" />
      <span className="font-cinzel text-[10px] tracking-[0.32em] [writing-mode:vertical-rl]">
        SCROLL
      </span>
      <svg width="10" height="34" viewBox="0 0 10 34" fill="none" aria-hidden>
        <path d="M5 0v30m0 0L1 26m4 4l4-4" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}
