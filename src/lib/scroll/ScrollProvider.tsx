'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SCENES, Scene } from './scenes';
import { initSmoothScroll } from './lenis-gsap';

gsap.registerPlugin(ScrollTrigger);

export interface Journey {
  progress: number;       // 0→1 across the whole document
  scene: Scene;           // currently active scene object
  sceneProgress: number;  // 0→1 within the active scene
  velocity: number;       // signed, px/frame, for marquee direction
  reduced: boolean;       // prefers-reduced-motion
  pinnedCount: number;    // number of currently active pinned ScrollTriggers
}

const TOTAL_VH = SCENES.reduce((acc, s) => acc + s.vh, 0);

const SCENE_BOUNDS = (() => {
  let acc = 0;
  return SCENES.map((scene) => {
    const start = acc / TOTAL_VH;
    acc += scene.vh;
    const end = acc / TOTAL_VH;
    return { scene, start, end };
  });
})();

function resolveSceneAtProgress(p: number): { scene: Scene; sceneProgress: number } {
  const clamped = Math.max(0, Math.min(1, p));
  for (let i = 0; i < SCENE_BOUNDS.length; i++) {
    const { scene, start, end } = SCENE_BOUNDS[i];
    if (clamped >= start && (clamped <= end || i === SCENE_BOUNDS.length - 1)) {
      const span = end - start;
      const sceneProgress = span > 0 ? (clamped - start) / span : 0;
      return { scene, sceneProgress: Math.max(0, Math.min(1, sceneProgress)) };
    }
  }
  return { scene: SCENES[0], sceneProgress: 0 };
}

const ScrollJourneyContext = createContext<Journey | null>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [journeyState, setJourneyState] = useState<Journey>({
    progress: 0,
    scene: SCENES[0],
    sceneProgress: 0,
    velocity: 0,
    reduced: false,
    pinnedCount: 0,
  });

  const lastUpdateRef = useRef<number>(0);
  const journeyRef = useRef<Journey>(journeyState);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cleanupSmoothScroll = initSmoothScroll();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.documentElement.style.transition = 'background-color 600ms cubic-bezier(.4, 0, .2, 1)';
    document.documentElement.style.backgroundColor = SCENES[0].canvas;

    const bodyTrigger = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const p = self.progress;
        const vel = self.getVelocity();
        const { scene, sceneProgress } = resolveSceneAtProgress(p);

        // Count active pins
        const allTriggers = ScrollTrigger.getAll();
        let pins = 0;
        for (const t of allTriggers) {
          if (t.pin && t.isActive) pins++;
        }

        journeyRef.current = {
          progress: p,
          scene,
          sceneProgress,
          velocity: vel,
          reduced,
          pinnedCount: pins,
        };

        // Canvas background transition
        if (document.documentElement.style.backgroundColor !== scene.canvas) {
          document.documentElement.style.backgroundColor = scene.canvas;
        }

        // Throttled setState ~20fps (every 50ms)
        const now = performance.now();
        if (now - lastUpdateRef.current > 50 || p === 0 || p === 1) {
          lastUpdateRef.current = now;
          setJourneyState({
            progress: p,
            scene,
            sceneProgress,
            velocity: vel,
            reduced,
            pinnedCount: pins,
          });
        }
      },
    });

    return () => {
      bodyTrigger.kill();
      cleanupSmoothScroll();
    };
  }, []);

  return (
    <ScrollJourneyContext.Provider value={journeyState}>
      {children}
    </ScrollJourneyContext.Provider>
  );
}

export function useScrollJourney(): Journey {
  const context = useContext(ScrollJourneyContext);
  if (!context) {
    throw new Error('useScrollJourney must be used within a <ScrollProvider>');
  }
  return context;
}
