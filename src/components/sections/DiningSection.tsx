"use client";

import React from "react";
import { Utensils, Wine, Clock, Flame, Coffee } from "lucide-react";
import { DINING_HIGHLIGHTS, REAL_PHOTOS } from "@/lib/data";
import { InView } from "@/components/core/in-view";
import { ProgressiveBlur } from "@/components/core/progressive-blur";
import { Parallax } from "@/components/reactbits/Parallax";

interface DiningSectionProps {
  onOpenEnquiry: (roomId?: string, type?: 'room' | 'banquet') => void;
}

export default function DiningSection({ onOpenEnquiry }: DiningSectionProps) {
  return (
    <section id="dining" className="py-24 bg-[#09090b] text-[#f4f3ef] relative border-t border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <InView className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Signature Gastronomy
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            {DINING_HIGHLIGHTS.name}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-xl mx-auto">
            {DINING_HIGHLIGHTS.subtitle} — 2,200 sq ft culinary space under Corporate Chef Naresh Kumar, pairing modern Indian gastronomy with artisanal mixology.
          </p>
        </InView>

        {/* Dual Highlight Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lounge Feature */}
          <InView transition={{ delay: 0.1, duration: 0.5 }}>
            <div className="bg-[#121216] border border-zinc-800 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group h-full">
              <div className="relative h-72 w-full overflow-hidden">
                <ProgressiveBlur
                  src={REAL_PHOTOS.nxKitchenLounge}
                  alt="NX Kitchen Lounge Cherry Red Bar"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  wrapperClassName="w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/30" />
                <div className="absolute top-4 left-4 bg-rose-950/90 border border-rose-500/40 text-rose-300 px-3 py-1 rounded-full text-[11px] font-medium flex items-center space-x-1.5">
                  <Wine className="w-3.5 h-3.5" />
                  <span>30-Seat Lounge</span>
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {DINING_HIGHLIGHTS.lounge.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-semibold mt-1">
                    {DINING_HIGHLIGHTS.lounge.aesthetic}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2 font-light">
                    {DINING_HIGHLIGHTS.lounge.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-white" />
                    <span>Open Daily: 12:00 PM – Midnight</span>
                  </span>
                </div>
              </div>
            </div>
          </InView>

          {/* Restaurant Feature */}
          <InView transition={{ delay: 0.2, duration: 0.5 }}>
            <div className="bg-[#121216] border border-zinc-800 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group h-full">
              <div className="relative h-72 w-full overflow-hidden">
                <Parallax speed={0.1} className="w-full h-full">
                  <ProgressiveBlur
                    src={REAL_PHOTOS.nxKitchenRestaurant}
                    alt="NX Kitchen Ivory & Gold Restaurant"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    wrapperClassName="w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/30" />
                <div className="absolute top-4 left-4 bg-zinc-900/90 border border-zinc-700 text-zinc-200 px-3 py-1 rounded-full text-[11px] font-medium flex items-center space-x-1.5 z-10">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>32-Cover Fine Dining</span>
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {DINING_HIGHLIGHTS.restaurant.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-semibold mt-1">
                    {DINING_HIGHLIGHTS.restaurant.aesthetic}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2 font-light">
                    {DINING_HIGHLIGHTS.restaurant.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center space-x-2">
                    <Utensils className="w-4 h-4 text-white" />
                    <span>Chef Naresh Kumar Signature Menu</span>
                  </span>
                </div>
              </div>
            </div>
          </InView>
        </div>

        {/* Third Image Detail Strip */}
        <InView transition={{ delay: 0.3, duration: 0.5 }}>
          <div className="bg-[#121216] p-6 sm:p-8 rounded-2xl border border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="relative h-44 rounded-xl overflow-hidden md:col-span-1">
              <ProgressiveBlur
                src={REAL_PHOTOS.nxKitchenBacksplash}
                alt="NX Kitchen Backsplash Nook"
                fill
                className="object-cover"
                wrapperClassName="w-full h-full"
              />
            </div>

            <div className="md:col-span-2 space-y-3">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                Expanding Culinary Concepts
              </span>
              <h4 className="font-serif text-xl font-semibold text-white">
                Terrazzo & Ground Floor Additions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300 pt-1 font-light">
                <div className="flex items-start space-x-2.5 bg-[#18181f] p-3 rounded-lg border border-zinc-800">
                  <Flame className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>Terrace Tandoor & Outdoor Grill Lounge</span>
                </div>
                <div className="flex items-start space-x-2.5 bg-[#18181f] p-3 rounded-lg border border-zinc-800">
                  <Coffee className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Ground-Floor Artisanal Café & Bakery</span>
                </div>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
