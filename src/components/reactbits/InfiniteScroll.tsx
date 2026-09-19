'use client';

import React, { useRef, useEffect } from 'react';

interface InfiniteScrollProps {
  items: React.ReactNode[];
  baseSpeed?: number;
  velocity?: number;
  className?: string;
}

export function InfiniteScroll({
  items,
  baseSpeed = 0.8,
  velocity = 0,
  className = '',
}: InfiniteScrollProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const velocityRef = useRef(velocity);

  useEffect(() => {
    velocityRef.current = velocity;
  }, [velocity]);

  useEffect(() => {
    let animId: number;

    const tick = () => {
      // Base continuous crawl + responsive scroll velocity response
      const v = velocityRef.current;
      const step = -(baseSpeed + v * 0.04);
      xRef.current += step;

      if (trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2;
        if (halfWidth > 0) {
          if (xRef.current <= -halfWidth) xRef.current += halfWidth;
          if (xRef.current >= 0) xRef.current -= halfWidth;
        }
        trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [baseSpeed]);

  return (
    <div className={`overflow-hidden whitespace-nowrap relative py-4 bg-[#09090b] border-y border-zinc-800/60 ${className}`}>
      <div ref={trackRef} className="inline-flex space-x-12 items-center will-change-transform">
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="inline-block">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
