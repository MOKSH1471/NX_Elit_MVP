'use client';

import React from 'react';
import Image from 'next/image';
import { Maximize2, BedDouble, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { ROOM_CATEGORIES, RoomCategory } from '@/lib/data';
import { HorizontalTrack } from '@/components/primitives/HorizontalTrack';

interface RoomsSectionProps {
  onOpenEnquiry: (roomId?: string, type?: 'room' | 'banquet') => void;
}

export default function RoomsSection({ onOpenEnquiry }: RoomsSectionProps) {
  return (
    <section id="rooms" className="relative bg-[#09090b] text-[#f4f3ef] overflow-hidden">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-12 space-y-4">
        <span className="font-cinzel text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold block">
          Residences // 28 BESPOKE SANCTUARIES
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Residences & Signature Suites
        </h2>
        <p className="font-space text-sm sm:text-base text-zinc-300 font-light max-w-2xl leading-relaxed">
          From tranquil sapphire and botanical emerald to the private ruby suites on the crown level. Double-insulated acoustic glazing, curated lighting, and custom furniture by Vinoo Chadha.
        </p>
      </div>

      {/* HorizontalTrack: Editorial Scrubbed Showcase */}
      <HorizontalTrack>
        {ROOM_CATEGORIES.map((room, idx) => (
          <div
            key={room.id}
            className="relative h-screen w-screen shrink-0 flex items-center justify-center px-8 sm:px-16 lg:px-24 overflow-hidden select-none"
            style={{ backgroundColor: '#09090b' }}
          >
            {/* Background Watermark Index */}
            <div
              data-rate="0.9"
              className="absolute left-[8vw] top-[12vh] pointer-events-none opacity-[0.05] text-white select-none z-0"
            >
              <span className="font-serif font-bold text-[34vw] leading-none">0{idx + 1}</span>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Media Column (Left) */}
              <div className="lg:col-span-7 relative h-[45vh] sm:h-[55vh] lg:h-[65vh] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Floor Theme Badge */}
                <div
                  className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-xs font-cinzel uppercase tracking-[0.2em] backdrop-blur-md border font-semibold flex items-center gap-2"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    borderColor: `${room.floorColorHex}66`,
                    color: room.floorColorHex,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: room.floorColorHex }}
                  />
                  <span>{room.floorTheme}</span>
                </div>

                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 flex items-center gap-2 text-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="font-cinzel text-[10px] tracking-[0.18em] uppercase font-semibold text-amber-300">
                    Direct Guarantee
                  </span>
                </div>
              </div>

              {/* Stat Block Column (Right) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <span className="font-cinzel text-[10px] tracking-[0.24em] uppercase text-[#d4af37] font-semibold block">
                    Sanctuary 0{idx + 1} // 0{ROOM_CATEGORIES.length}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                    {room.name}
                  </h3>
                  <p className="font-space text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {room.description}
                  </p>
                </div>

                {/* Architectural Specifications Block */}
                <div className="grid grid-cols-2 gap-3 py-4 border-y border-zinc-800 text-xs font-space">
                  <div className="flex items-center gap-2.5 text-zinc-200">
                    <Maximize2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>{room.sqft} Area</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-zinc-200">
                    <BedDouble className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>{room.bed}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-zinc-200">
                    <Users className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-zinc-200">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                    <span>Acoustic Isolation</span>
                  </div>
                </div>

                {/* Pricing & Action */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <div>
                    <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold block">
                      Starting At
                    </span>
                    <span className="font-space text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {room.priceStarting}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenEnquiry(room.id, 'room')}
                    className="px-6 py-3.5 bg-white text-black font-cinzel font-bold text-xs uppercase tracking-[0.16em] rounded-full hover:bg-zinc-200 transition-colors shadow-2xl flex items-center gap-2 cursor-pointer"
                  >
                    <span>Reserve Suite</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </HorizontalTrack>
    </section>
  );
}
