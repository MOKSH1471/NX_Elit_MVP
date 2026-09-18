"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, ArrowUpRight, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import { HOTEL_INFO, REAL_PHOTOS } from "@/lib/data";
import { InView } from "@/components/core/in-view";
import { Counter } from "@/components/reactbits/Counter";
import { ProgressiveBlur } from "@/components/core/progressive-blur";

interface StorySectionProps {
  onOpenEnquiry: (roomId?: string, type?: 'room' | 'banquet') => void;
}

const COLOR_FLOORS = [
  {
    floor: "Level 02",
    name: "Cobalt & Sapphire Blue",
    swatch: "bg-blue-600",
    glowColor: "rgba(30, 58, 138, 0.22)",
    badgeBg: "bg-blue-950/80 border-blue-500/40 text-blue-300",
    border: "border-blue-500/40",
    image: REAL_PHOTOS.roomColorInterior1,
    designerQuote: "Deep sapphire velvet tones designed to create an oasis of deep tranquility and contemplation away from EM Bypass traffic.",
    materials: ["Cobalt Velvet Upholstery", "Bespoke Walnut Paneling", "Warm Ambient Sconces", "Brushed Brass Fixtures"],
    specs: "6 Deluxe & Executive Residences",
    desc: "Cobalt and sapphire blue palette with deep velvet accents, conceived by Vinoo Chadha for an intimate boutique ambience.",
  },
  {
    floor: "Level 03 & 04",
    name: "Forest Emerald Green",
    swatch: "bg-emerald-600",
    glowColor: "rgba(6, 78, 59, 0.22)",
    badgeBg: "bg-emerald-950/80 border-emerald-500/40 text-emerald-300",
    border: "border-emerald-500/40",
    image: REAL_PHOTOS.roomInteriorDetail2,
    designerQuote: "Lush botanical forest greens balanced with warm golden backlighting to rejuvenate corporate travelers after long conference sessions.",
    materials: ["Velvet Forest Green Panels", "High-Contrast Charcoal Accents", "Ergonomic Workstations", "Rain Shower Suites"],
    specs: "12 Executive Deluxe Residences",
    desc: "Rich forest green tones spanning 12 guest residences, balanced with warm amber illumination and bespoke brass finishes.",
  },
  {
    floor: "Level 05",
    name: "Crimson & Ruby Red",
    swatch: "bg-rose-600",
    glowColor: "rgba(136, 19, 55, 0.22)",
    badgeBg: "bg-rose-950/80 border-rose-500/40 text-rose-300",
    border: "border-rose-500/40",
    image: REAL_PHOTOS.heroExterior,
    designerQuote: "Flagship suite level with dramatic crimson depths and private city panoramas across the eastern Kolkata horizon.",
    materials: ["Deep Ruby Silk Textures", "Private Living Area", "Panoramic EM Bypass Skyline", "Executive In-Room Bar"],
    specs: "Flagship Presidential & Super Deluxe Suites",
    desc: "Flagship executive suite level adorned in crimson and ruby accents, offering private views across the EM Bypass skyline.",
  },
];

export default function StorySection({ onOpenEnquiry }: StorySectionProps) {
  const [activeFloor, setActiveFloor] = useState(0);
  const currentFloor = COLOR_FLOORS[activeFloor];

  return (
    <section
      id="story"
      className="relative py-28 bg-[#09090b] text-[#f4f3ef] border-t border-b border-zinc-800/60 overflow-hidden transition-colors duration-1000"
    >
      {/* Dynamic Floor Ambient Glow Mesh */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 opacity-60"
        style={{ backgroundColor: currentFloor.glowColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Section Header with Editorial Magazine Treatment */}
        <InView className="text-center max-w-3xl mx-auto space-y-5">
          <span className="text-[11px] sm:text-xs font-cinzel font-semibold tracking-[0.25em] uppercase text-amber-400/90 block">
            Architecture & Interior Philosophy
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Not Just Another Business Hotel. <br />
            <span className="italic font-light text-zinc-300">A Study in Contrast & Color.</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light max-w-xl mx-auto">
            Conceived by interior architect <span className="text-white font-medium">{HOTEL_INFO.interiorDesigner}</span>, NX Elit pairs deep moody tones and acoustic serenity with a distinct colour identity across each level.
          </p>
        </InView>

        {/* Key Stats Row - Minimalist & Breathable */}
        <InView transition={{ delay: 0.1, duration: 0.5 }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-zinc-800/80 text-center">
            <div className="space-y-1">
              <div className="font-space text-3xl sm:text-4xl font-bold text-white tracking-tight">
                <Counter value={28} />
              </div>
              <p className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-zinc-400 font-semibold">Designer Rooms</p>
            </div>

            <div className="space-y-1">
              <div className="font-space text-3xl sm:text-4xl font-bold text-white tracking-tight">
                <Counter value={5} />
              </div>
              <p className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-zinc-400 font-semibold">Colour Floors</p>
            </div>

            <div className="space-y-1">
              <div className="font-space text-3xl sm:text-4xl font-bold text-white flex items-center justify-center space-x-1 tracking-tight">
                <span>4</span>
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 inline" />
              </div>
              <p className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-zinc-400 font-semibold">Boutique Luxury</p>
            </div>

            <div className="space-y-1">
              <div className="font-space text-3xl sm:text-4xl font-bold text-white tracking-tight">
                <span>2,200</span>
              </div>
              <p className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-zinc-400 font-semibold">Sq Ft Gastronomy</p>
            </div>
          </div>
        </InView>

        {/* Flagship Interactive Floor Experience (Awwwards Style) */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800/80 pb-6 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-zinc-400 font-medium">
                <Compass className="w-4 h-4 text-[#d4af37]" />
                <span className="font-cinzel text-xs uppercase tracking-[0.18em] text-[#d4af37] font-semibold">Interactive Floor Architecture</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                Explore the Signature Colour Floors
              </h3>
            </div>
            
            {/* Interactive Floor Switcher Tabs */}
            <div className="flex items-center space-x-2 p-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 overflow-x-auto">
              {COLOR_FLOORS.map((floor, idx) => (
                <button
                  key={floor.floor}
                  onClick={() => setActiveFloor(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-cinzel font-semibold tracking-[0.16em] uppercase transition-all duration-300 flex items-center space-x-2 shrink-0 cursor-pointer ${
                    activeFloor === idx
                      ? "bg-white text-black shadow-lg scale-105"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${floor.swatch}`} />
                  <span>{floor.floor}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Floor Featured Split Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 luxury-glass-elevated rounded-3xl border border-white/10">
            {/* Left: Full-Bleed Floor Photography with Glass Badge */}
            <div className="lg:col-span-7 relative h-80 sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl group">
              <ProgressiveBlur
                src={currentFloor.image}
                alt={currentFloor.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                wrapperClassName="w-full h-full"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              <div className="absolute top-5 left-5 flex items-center space-x-2">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-cinzel font-semibold uppercase tracking-[0.18em] bg-black/70 backdrop-blur-md text-white border border-white/10 shadow-md">
                  {currentFloor.floor} Palette
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-wider text-zinc-300 font-space font-medium">
                  {currentFloor.specs}
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mt-1">
                  {currentFloor.name}
                </h4>
              </div>
            </div>

            {/* Right: Architectural Narrative, Materials & Quote */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-cinzel font-semibold block">
                  Concept & Materiality
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                  {currentFloor.name}
                </h4>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {currentFloor.desc}
                </p>

                {/* Designer Quote Callout */}
                <div className="p-4 rounded-xl bg-white/[0.03] border-l border-[#d4af37]/60 text-xs text-zinc-300 italic font-serif leading-relaxed">
                  &ldquo;{currentFloor.designerQuote}&rdquo;
                  <span className="block text-[10px] text-[#d4af37] font-cinzel uppercase tracking-[0.18em] font-semibold not-italic mt-2">
                    Vinoo Chadha · Interior Architect
                  </span>
                </div>
              </div>

              {/* Direct Floor Room Booking Anchor */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <Link
                  href="/rooms"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 font-cinzel font-bold text-xs tracking-[0.16em] uppercase transition-all shadow-lg hover:scale-105 cursor-pointer"
                >
                  <span>Explore Rooms on This Floor</span>
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
