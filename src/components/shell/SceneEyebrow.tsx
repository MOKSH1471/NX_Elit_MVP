'use client';

import React, { useEffect, useState } from 'react';
import { useScrollJourney } from '@/lib/scroll/ScrollProvider';
import { INK } from '@/lib/scroll/scenes';

export function SceneEyebrow() {
  const { scene } = useScrollJourney();
  const [displayedEyebrow, setDisplayedEyebrow] = useState(scene.eyebrow);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  useEffect(() => {
    if (scene.eyebrow !== displayedEyebrow) {
      setFadeState('out');
      const timer = setTimeout(() => {
        setDisplayedEyebrow(scene.eyebrow);
        setFadeState('in');
      }, 225);
      return () => clearTimeout(timer);
    }
  }, [scene.eyebrow, displayedEyebrow]);

  return (
    <div
      className="fixed top-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none select-none text-center"
      style={{
        color: INK[scene.contrast],
        transition: 'color 600ms cubic-bezier(.4,0,.2,1)',
      }}
      aria-hidden
    >
      <span
        className="font-cinzel text-[10px] tracking-[0.32em] uppercase font-semibold block transition-opacity duration-[450ms] ease-out"
        style={{ opacity: fadeState === 'in' ? 1 : 0 }}
      >
        {displayedEyebrow}
      </span>
    </div>
  );
}
