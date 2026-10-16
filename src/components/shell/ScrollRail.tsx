'use client';

import React from 'react';
import { useScrollJourney } from '@/lib/scroll/ScrollProvider';
import { INK } from '@/lib/scroll/scenes';

export function ScrollRail() {
  const { progress, scene } = useScrollJourney();
  const pct = Math.round(progress * 100);

  return (
    <div
      className="fixed left-2 sm:left-3 xl:left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex pointer-events-none select-none"
      style={{ color: INK[scene.contrast], transition: 'color 600ms cubic-bezier(.4,0,.2,1)' }}
      aria-hidden
    >
      <span className="h-14 w-px bg-current opacity-30" />
      <span className="font-space text-[10px] tabular-nums tracking-[0.18em]">
        {String(pct).padStart(2, '0')}
      </span>
      <span className="h-14 w-px bg-current opacity-30" />
      <span className="font-cinzel text-[8.5px] tracking-[0.28em] [writing-mode:vertical-rl]">
        SCROLL
      </span>
      <svg width="8" height="26" viewBox="0 0 8 26" fill="none" aria-hidden>
        <path d="M4 0v22m0 0L1 19m3 3l3-3" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}
