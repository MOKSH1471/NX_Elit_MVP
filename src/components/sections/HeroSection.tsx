"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { REAL_PHOTOS, HOTEL_INFO } from "@/lib/data";
import { InView } from "@/components/core/in-view";
import { ProgressiveBlur } from "@/components/core/progressive-blur";
import { SplitText } from "@/components/reactbits/SplitText";

interface HeroSectionProps {
  onOpenEnquiry: (roomId?: string, type?: 'room' | 'banquet') => void;
}

const HERO_SLIDES = [
  {
    image: REAL_PHOTOS.heroExterior,
    subtitle: "28 Designer Rooms · Colour-Coded Floors · NX Kitchen Lounge",
  },
  {
    image: REAL_PHOTOS.roomColorInterior1,
    subtitle: "Interiors by Designer Vinoo Chadha · EM Bypass Corridor",
  },
  {
    image: REAL_PHOTOS.nxKitchenLounge,
    subtitle: "30-Seat Lounge with Cherry-Red Bar & 32-Cover Fine Dining",
  },
];

export default function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#09090b]"
    >
      {/* Hardware-Accelerated Visual Background */}
      <div className="absolute inset-0 z-0 origin-center w-full h-full">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <ProgressiveBlur
              src={slide.image}
              alt="NX Elit Luxury Boutique Hotel"
              fill
              priority={index === 0}
              className="object-cover object-center brightness-[0.4] contrast-[1.05]"
              wrapperClassName="w-full h-full"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/30 to-black/70" />
      </div>

      {/* Spacer for Top Navbar Alignment */}
      <div className="h-6" />

      {/* Purely Cinematic Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8 my-auto">
        <InView>
          <div className="space-y-4">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[0.18em] text-[#f4f3ef] uppercase drop-shadow-lg">
              <SplitText text="NX ELIT" delay={0.1} />
            </h1>
            <p className="text-base sm:text-xl font-light text-zinc-300 font-serif tracking-widest max-w-2xl mx-auto">
              {HOTEL_INFO.tagline}
            </p>
          </div>
        </InView>

        <InView transition={{ delay: 0.15, duration: 0.5 }}>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto tracking-widest uppercase font-light">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>
        </InView>

        {/* Carousel Slide Indicators */}
        <div className="flex items-center justify-center space-x-2 pt-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentSlide ? "w-8 bg-white" : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Minimal Scroll Cue at Screen Bottom */}
      <div className="relative z-10 pb-2">
        <a
          href="#story"
          className="flex flex-col items-center space-y-1 text-zinc-400 hover:text-white transition-colors text-[11px] uppercase tracking-widest font-light"
        >
          <span>Explore Property</span>
          <ChevronDown className="w-4 h-4 text-zinc-400" />
        </a>
      </div>
    </section>
  );
}
