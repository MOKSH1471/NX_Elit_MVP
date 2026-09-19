'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Compass, ArrowUpRight } from 'lucide-react';
import { HOTEL_INFO, REAL_PHOTOS } from '@/lib/data';
import { HorizontalTrack } from '@/components/primitives/HorizontalTrack';
import { CutoutLayer } from '@/components/primitives/CutoutLayer';
import { Counter } from '@/components/reactbits/Counter';

interface StorySectionProps {
  onOpenEnquiry?: (roomId?: string, type?: 'room' | 'banquet') => void;
}

const PANELS = [
  {
    level: 'LEVEL 02',
    numeral: '02',
    name: 'Cobalt & Sapphire Blue',
    bg: '#0b1733',
    desc: 'Deep sapphire velvet tones conceived by Vinoo Chadha to create an oasis of deep tranquility and acoustic contemplation away from EM Bypass traffic.',
    quote: 'An acoustic sanctuary designed with calming oceanic blues and sleek metallic tones, ideal for deep focus.',
    specs: '6 Deluxe & Executive Residences',
    materials: ['Cobalt Velvet Upholstery', 'Bespoke Walnut Paneling', 'Warm Ambient Sconces', 'Brushed Brass Fixtures'],
    image: REAL_PHOTOS.roomColorInterior1,
    cutout: '/cutouts/brass-detail.webp',
    cutoutPosition: 'right-0 bottom-0 w-28 sm:w-36 h-48 sm:h-64 opacity-20',
  },
  {
    level: 'LEVELS 03 & 04',
    numeral: '03',
    name: 'Forest Emerald Green',
    bg: '#062018',
    desc: 'Lush botanical forest greens balanced with warm golden backlighting to rejuvenate corporate travelers after intensive conference sessions.',
    quote: 'Bathed in lush botanical greens, warm oak wood finishes, and serene earthy textures.',
    specs: '12 Executive Deluxe Residences',
    materials: ['Velvet Forest Green Panels', 'Acoustic Timber Slats', 'Ergonomic Workstations', 'Rain Shower Suites'],
    image: REAL_PHOTOS.roomInteriorDetail2,
    cutout: '/cutouts/oak-slat.webp',
    cutoutPosition: 'right-0 bottom-0 w-28 sm:w-36 h-48 sm:h-64 opacity-20',
  },
  {
    level: 'LEVEL 05',
    numeral: '05',
    name: 'Crimson & Ruby Red Crown',
    bg: '#2a0713',
    desc: 'The crown jewel of NX Elit. Rich crimson tones, plush leather furniture, and executive suite indulgence with private skyline panoramas.',
    quote: 'Flagship suite level with dramatic crimson depths and private city panoramas across the eastern Kolkata horizon.',
    specs: 'Presidential & Super Deluxe Suites',
    materials: ['Deep Ruby Silk Textures', 'Calacatta Marble Accents', 'Panoramic EM Bypass Skyline', 'Executive In-Room Bar'],
    image: REAL_PHOTOS.roomInteriorDetail3,
    cutout: '/cutouts/marble-edge.webp',
    cutoutPosition: 'right-0 bottom-0 w-28 sm:w-36 h-48 sm:h-64 opacity-20',
  },
];

export default function StorySection({ onOpenEnquiry }: StorySectionProps) {
  return (
    <section id="story" className="relative bg-[#0d0d10] text-[#f4f3ef] overflow-hidden">
      {/* Ethos Sequence Intro Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16 space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <Compass className="w-4 h-4 text-[#d4af37]" />
            <span className="font-cinzel text-xs uppercase tracking-[0.24em] text-[#d4af37] font-semibold">
              Architecture & Interior Philosophy
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Five Floors, <span className="italic font-light text-zinc-300">Three Moods.</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl">
            Conceived by interior architect <span className="text-white font-medium">{HOTEL_INFO.interiorDesigner}</span>, NX Elit is an architectural study in contrast. As you journey up through the address, each level reveals a distinct chromatic sanctuary.
          </p>
        </div>

        {/* Scrub-Linked Numerical Counters Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-zinc-800/80 text-center">
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              <Counter value={28} />
            </div>
            <p className="font-cinzel text-[10px] uppercase tracking-[0.22em] text-zinc-400 font-semibold">
              Designer Residences
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              <Counter value={5} />
            </div>
            <p className="font-cinzel text-[10px] uppercase tracking-[0.22em] text-zinc-400 font-semibold">
              Colour Floors
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-bold text-white flex items-center justify-center gap-1 tracking-tight">
              <Counter value={4} />
              <Star className="w-5 h-5 text-amber-400 fill-amber-400 inline" />
            </div>
            <p className="font-cinzel text-[10px] uppercase tracking-[0.22em] text-zinc-400 font-semibold">
              Boutique Luxury
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              <Counter value={2200} />
            </div>
            <p className="font-cinzel text-[10px] uppercase tracking-[0.22em] text-zinc-400 font-semibold">
              Sq Ft Gastronomy
            </p>
          </div>
        </div>
      </div>

      {/* HorizontalTrack: Three Scrubbed Floor Panels with Rock-Solid 12-Col Grid */}
      <HorizontalTrack>
        {PANELS.map((panel, idx) => (
          <div
            key={panel.level}
            className="relative h-screen w-screen shrink-0 flex items-center justify-center px-8 sm:px-16 lg:px-24 overflow-hidden select-none"
            style={{ backgroundColor: panel.bg }}
          >
            {/* Background Floor Numeral Watermark (Subtle depth, non-obstructive) */}
            <div
              data-rate="0.9"
              className="absolute left-[6vw] top-[8vh] pointer-events-none opacity-[0.04] text-white select-none z-0"
            >
              <span className="font-serif font-bold text-[36vw] leading-none">{panel.numeral}</span>
            </div>

            {/* Content Grid: 12-column layout firmly held in place */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Display Headline + Materials / Quote */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <span className="font-cinzel text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold block">
                    {panel.level} // CHROMATIC SANCTUARY
                  </span>
                  <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {panel.name}
                  </h3>
                  <p className="font-space text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {panel.desc}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Vinoo Chadha Quote */}
                  <div className="p-5 rounded-2xl bg-black/40 border border-white/10 text-xs text-zinc-300 italic font-serif leading-relaxed">
                    &ldquo;{panel.quote}&rdquo;
                    <span className="block not-italic font-cinzel text-[10px] text-[#d4af37] tracking-[0.2em] uppercase font-semibold mt-3">
                      Vinoo Chadha · Interior Architect
                    </span>
                  </div>

                  {/* Materials Tags */}
                  <div className="flex flex-wrap gap-2">
                    {panel.materials.map((m) => (
                      <span
                        key={m}
                        className="font-space text-[11px] px-3 py-1 rounded-md bg-white/[0.06] border border-white/10 text-zinc-300 font-light"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Enquiry Action */}
                  <button
                    onClick={() => onOpenEnquiry?.(undefined, 'room')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-cinzel font-bold text-xs uppercase tracking-[0.16em] hover:bg-zinc-200 transition-colors cursor-pointer"
                  >
                    <span>Reserve on {panel.level}</span>
                    <ArrowUpRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>

              {/* Right Column: High-Res Photography Panel */}
              <div className="lg:col-span-7 relative h-[45vh] sm:h-[55vh] lg:h-[65vh] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src={panel.image}
                  alt={panel.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs">
                  <span className="font-space font-medium tracking-wider">{panel.specs}</span>
                  <span className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-[#d4af37]">
                    0{idx + 1} // 03
                  </span>
                </div>
              </div>
            </div>

            {/* Foreground Cutout Layer (Corner Architectural Framing Accent, Never Blocks Photo) */}
            <CutoutLayer
              src={panel.cutout}
              alt={`${panel.name} architectural detail`}
              rate={0.95}
              className={panel.cutoutPosition}
            />
          </div>
        ))}
      </HorizontalTrack>
    </section>
  );
}
