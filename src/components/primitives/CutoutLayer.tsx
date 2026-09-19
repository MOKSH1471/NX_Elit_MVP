'use client';

import React from 'react';
import Image from 'next/image';

interface CutoutLayerProps {
  src: string;
  alt: string;
  rate?: number; // data-rate for HorizontalTrack parallax (0.5 - 0.7)
  className?: string;
  priority?: boolean;
}

export function CutoutLayer({
  src,
  alt,
  rate = 0.6,
  className = '',
  priority = false,
}: CutoutLayerProps) {
  return (
    <div
      data-rate={rate}
      className={`absolute pointer-events-none select-none z-20 will-change-transform ${className}`}
      aria-hidden
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 50vw, 35vw"
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}
