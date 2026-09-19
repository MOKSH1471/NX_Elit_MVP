'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { REAL_PHOTOS } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onOpenEnquiry?: (roomId?: string, type?: 'room' | 'banquet') => void;
}

const HERO_SLIDES = [
  { image: REAL_PHOTOS.heroExterior, label: 'Facade Skyline' },
  { image: REAL_PHOTOS.roomColorInterior1, label: 'Sapphire Residence' },
  { image: REAL_PHOTOS.nxKitchenLounge, label: 'NX Kitchen Lounge' },
];

export default function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !contentRef.current) return;

      // Scrubbed exit handing off to Ethos
      gsap.to(contentRef.current, {
        yPercent: -20,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const prev = () => setCurrentSlide((i) => (i === 0 ? HERO_SLIDES.length - 1 : i - 1));
  const next = () => setCurrentSlide((i) => (i === HERO_SLIDES.length - 1 ? 0 : i + 1));

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#09090b] select-none"
    >
      {/* Photographic Slides Stack */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.image}
              alt="NX Elit Boutique Hotel"
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center brightness-[0.55]"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/25 to-black/60 z-10 pointer-events-none" />
      </div>

      {/* Centered Hero Content */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center text-center px-6 gap-6 max-w-4xl will-change-transform"
      >
        <span className="font-cinzel text-xs uppercase tracking-[0.32em] text-[#d4af37] font-semibold">
          Boutique 4-Star · EM Bypass, Kolkata
        </span>

        <h1
          className="font-serif font-bold tracking-[0.2em] text-white uppercase leading-none drop-shadow-2xl"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)' }}
        >
          NX ELIT
        </h1>

        <p className="font-space text-sm sm:text-base font-light text-zinc-300 tracking-wide max-w-lg">
          28 Designer Residences across chromatic colour floors. Interiors curated by Vinoo Chadha.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onOpenEnquiry?.(undefined, 'room')}
            className="px-8 py-3.5 rounded-full bg-white text-black font-cinzel font-bold text-xs tracking-[0.2em] uppercase hover:bg-zinc-200 transition-colors shadow-2xl cursor-pointer"
          >
            Check Direct Rates
          </button>
        </div>
      </div>

      {/* Manual Carousel Controls ‹ 01 — 03 › */}
      <div className="absolute bottom-12 left-8 z-20 hidden sm:flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white">
        <button
          onClick={prev}
          className="p-1 hover:text-[#d4af37] transition-colors cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="font-space text-xs tracking-wider tabular-nums">
          0{currentSlide + 1} — 0{HERO_SLIDES.length}
        </span>
        <button
          onClick={next}
          className="p-1 hover:text-[#d4af37] transition-colors cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Scroll Down Cue */}
      <a
        href="#story"
        className="absolute bottom-12 right-8 z-20 hidden sm:flex flex-col items-center gap-2 font-cinzel text-[10px] tracking-[0.28em] text-zinc-400 hover:text-white uppercase transition-colors"
      >
        <span>Explore</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}
