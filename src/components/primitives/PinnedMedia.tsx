'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PinnedMediaProps {
  images: string[];
  alt?: string;
  className?: string;
  aspectClassName?: string;
  children?: React.ReactNode; // e.g. stat block or specs
  showControls?: boolean;
}

export function PinnedMedia({
  images,
  alt = 'NX Elit Hotel Media',
  className = '',
  aspectClassName = 'h-[55vh] sm:h-[65vh] w-[85vw] max-w-4xl',
  children,
  showControls = true,
}: PinnedMediaProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Centered Media Frame */}
      <div className={`relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-950 border border-white/10 ${aspectClassName}`}>
        {images.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={img}
              alt={`${alt} ${idx + 1}`}
              fill
              priority={idx === 0}
              sizes="(max-width: 1024px) 90vw, 60vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10 pointer-events-none" />

        {/* Overlay Children (e.g. Stat Block) */}
        {children && (
          <div className="absolute inset-0 z-20 pointer-events-auto flex flex-col justify-end p-6 sm:p-10">
            {children}
          </div>
        )}

        {/* Manual Carousel Controls: ‹ n ——— m › */}
        {showControls && images.length > 1 && (
          <div className="absolute top-6 right-6 z-30 flex items-center gap-3 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white select-none">
            <button
              onClick={prev}
              className="p-1 hover:text-amber-400 transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-space text-xs tracking-wider tabular-nums font-medium">
              0{currentIndex + 1} — 0{images.length}
            </span>
            <button
              onClick={next}
              className="p-1 hover:text-amber-400 transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
