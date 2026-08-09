"use client";

import React from "react";
import { Star, Compass } from "lucide-react";
import { HOTEL_INFO, REAL_PHOTOS } from "@/lib/data";
import { InView } from "@/components/core/in-view";
import { Counter } from "@/components/reactbits/Counter";
import { BackgroundDriftWall } from "@/components/reactbits/BackgroundDriftWall";
import InfiniteMenu, { MenuItem } from "@/components/reactbits/InfiniteMenu";

interface StorySectionProps {
  onOpenEnquiry: (roomId?: string, type?: 'room' | 'banquet') => void;
}

const INFINITE_MENU_ITEMS: MenuItem[] = [
  {
    image: REAL_PHOTOS.roomColorInterior1,
    link: "#rooms",
    title: "2nd Floor Sapphire Blue",
    description: "Cobalt & Sapphire Blue interior palette designed by Vinoo Chadha.",
  },
  {
    image: REAL_PHOTOS.roomInteriorDetail2,
    link: "#rooms",
    title: "3rd & 4th Floor Emerald Green",
    description: "Velvet Forest Green theme across 12 deluxe guest residences.",
  },
  {
    image: REAL_PHOTOS.heroExterior,
    link: "#rooms",
    title: "5th Floor Ruby Red",
    description: "Deep Crimson & Ruby Red flagship suite level.",
  },
  {
    image: REAL_PHOTOS.nxKitchenLounge,
    link: "#dining",
    title: "NX Kitchen Lounge",
    description: "30-Seat lounge with cherry-red bar & artisanal mixology.",
  },
  {
    image: REAL_PHOTOS.nxKitchenRestaurant,
    link: "#dining",
    title: "Ivory & Gold Dining",
    description: "32-Cover fine dining under Corporate Chef Naresh Kumar.",
  },
  {
    image: REAL_PHOTOS.banquetSpace,
    link: "#experience",
    title: "NX Elit Banquet Venue",
    description: "2,000 sq ft venue for up to 150 corporate & social guests.",
  },
];

export default function StorySection({ onOpenEnquiry }: StorySectionProps) {
  return (
    <section
      id="story"
      className="relative py-24 bg-[#09090b] text-[#f4f3ef] border-t border-b border-zinc-800/60 overflow-hidden"
    >
      {/* Background Ambient DriftWall Show (Non-Interactive & High Performance) */}
      <BackgroundDriftWall />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <InView className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            The Concept & Interior Philosophy
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#f4f3ef]">
            Not Just Another Business Hotel
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            Situated on Kolkata's bustling Eastern Metropolitan (EM) Bypass corridor, NX Elit moves beyond the generic corporate box. Conceived by acclaimed interior designer <span className="text-white font-medium">{HOTEL_INFO.interiorDesigner}</span>, every space weaves high-contrast dark tones, rich texture, and a signature colour identity across guest floors.
          </p>
        </InView>

        {/* Key Stats Row */}
        <InView transition={{ delay: 0.1, duration: 0.5 }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 bg-[#121216] rounded-2xl border border-zinc-800 text-center shadow-xl">
            <div className="space-y-1">
              <div className="font-serif text-4xl font-bold text-white">
                <Counter value={28} />
              </div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium">Designer Rooms</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl font-bold text-white">
                <Counter value={5} />
              </div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium">Colour Floors</p>
            </div>
            <div className="space-y-1 flex flex-col items-center justify-center">
              <div className="font-serif text-4xl font-bold text-white flex items-center justify-center space-x-1">
                <span>4</span>
                <Star className="w-5 h-5 text-white fill-white inline" />
              </div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium">Boutique Luxury</p>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-4xl font-bold text-white">
                <Counter value={1} />
              </div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium">NX Kitchen</p>
            </div>
          </div>
        </InView>

        {/* 3D WebGL InfiniteMenu Sphere replacing old floor tabs */}
        <InView transition={{ delay: 0.2, duration: 0.5 }}>
          <div className="space-y-6 bg-[#121216] p-6 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-800 pb-6 space-y-3 sm:space-y-0">
              <div>
                <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-zinc-400">
                  <Compass className="w-4 h-4 text-white" />
                  <span>3D Interactive Exploration</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mt-1">
                  Explore NX Elit Experiences
                </h3>
              </div>
              <p className="text-xs text-zinc-400 max-w-xs font-light">
                Drag to rotate the 3D sphere to preview our signature color floors, NX Kitchen lounge, and banquet venue.
              </p>
            </div>

            {/* InfiniteMenu WebGL Container */}
            <div className="w-full h-[520px] sm:h-[600px] relative rounded-2xl overflow-hidden bg-[#09090b] border border-zinc-800">
              <InfiniteMenu items={INFINITE_MENU_ITEMS} scale={1.0} />
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
