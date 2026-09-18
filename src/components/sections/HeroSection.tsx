"use client";

import React, { useState, useEffect } from "react";
import { REAL_PHOTOS } from "@/lib/data";
import { ProgressiveBlur } from "@/components/core/progressive-blur";

interface HeroSectionProps {
  onOpenEnquiry?: (roomId?: string, type?: 'room' | 'banquet') => void;
}

const HERO_SLIDES = [
  { image: REAL_PHOTOS.heroExterior },
  { image: REAL_PHOTOS.roomColorInterior1 },
  { image: REAL_PHOTOS.nxKitchenLounge },
];

export default function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#09090b]"
    >
      {/* Background Slideshow — brighter, cleaner view */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1400ms] ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <ProgressiveBlur
              src={slide.image}
              alt="NX Elit Boutique Hotel"
              fill
              priority={index === 0}
              className="object-cover object-center brightness-[0.62]"
              wrapperClassName="w-full h-full"
              sizes="100vw"
            />
          </div>
        ))}
        {/* Minimal vignette — bottom edge only */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/75 via-transparent to-transparent" />
        {/* Subtle top fade for navbar readability */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/55 to-transparent" />
      </div>

      {/* Hero Content — centred, minimal */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-6 gap-7 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Eyebrow */}
        <span className="text-[10px] sm:text-[11px] font-cinzel uppercase tracking-[0.32em] text-amber-300/80">
          Boutique 4-Star · EM Bypass, Kolkata
        </span>

        {/* Logo / Wordmark */}
        <h1 className="font-serif font-bold tracking-[0.22em] text-white uppercase leading-none drop-shadow-2xl"
          style={{ fontSize: "clamp(3.2rem, 9vw, 6.5rem)" }}
        >
          NX ELIT
        </h1>

        {/* One-line descriptor */}
        <p className="text-sm sm:text-base font-light text-zinc-300/85 tracking-wide">
          28 Designer Residences · Dark Elegance
        </p>

      </div>

      {/* Slide indicators — bottom centre */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex items-center justify-center space-x-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 cursor-pointer ${
              i === currentSlide
                ? "w-7 h-[5px] bg-white"
                : "w-[5px] h-[5px] bg-white/35 hover:bg-white/65"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint — bottom right */}
      <a
        href="#story"
        aria-label="Scroll to explore"
        className="absolute bottom-10 right-8 z-10 hidden sm:flex flex-col items-center gap-2 text-[9px] font-cinzel uppercase tracking-[0.28em] text-zinc-400/65 hover:text-zinc-200 transition-colors"
      >
        <span>Scroll</span>
        <span className="block w-px h-8 bg-zinc-500/60 mx-auto" />
      </a>
    </section>
  );
}
