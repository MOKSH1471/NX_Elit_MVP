"use client";

import React from "react";
import { Clock, Utensils, Wifi, Car, Shirt, Plane, Calendar, Users, ArrowRight } from "lucide-react";
import { REAL_PHOTOS, AMENITIES } from "@/lib/data";
import { InView } from "@/components/core/in-view";
import { AnimatedGroup } from "@/components/core/animated-group";
import { ProgressiveBlur } from "@/components/core/progressive-blur";

interface ExperienceSectionProps {
  onOpenEnquiry: (roomId?: string, type?: 'room' | 'banquet') => void;
}

const AMENITY_ICONS: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-5 h-5 text-[#d4af37]" />,
  Utensils: <Utensils className="w-5 h-5 text-[#d4af37]" />,
  Wifi: <Wifi className="w-5 h-5 text-[#d4af37]" />,
  Car: <Car className="w-5 h-5 text-[#d4af37]" />,
  Shirt: <Shirt className="w-5 h-5 text-[#d4af37]" />,
  Plane: <Plane className="w-5 h-5 text-[#d4af37]" />,
};

export default function ExperienceSection({ onOpenEnquiry }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24 bg-[#09090b] text-[#f4f3ef] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <InView className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] sm:text-xs font-cinzel font-semibold tracking-[0.25em] uppercase text-amber-400/90 block">
            Services & Event Venues
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Amenities & Banquet Venue
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-lg mx-auto">
            Tailored boutique hospitality and a 2,000 sq ft private hall for executive offsites and gatherings.
          </p>
        </InView>

        {/* Horizontal Amenities Grid */}
        <AnimatedGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#121216]/90 border border-zinc-800 space-y-4 shadow-lg hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-[#d4af37]/40 transition-colors">
                  {AMENITY_ICONS[item.icon]}
                </div>
                <span className="text-xs font-space font-medium text-zinc-500">0{idx + 1}</span>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-space text-base font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </AnimatedGroup>

        {/* Featured Banquet Hall Feature Layout */}
        <InView transition={{ delay: 0.2, duration: 0.5 }}>
          <div className="bg-[#121216] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800">
              <ProgressiveBlur
                src={REAL_PHOTOS.banquetSpace}
                alt="NX Elit Banquet Hall Venue"
                fill
                className="object-cover"
                wrapperClassName="w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-cinzel uppercase tracking-[0.16em] font-semibold text-amber-300 border border-white/10">
                2,000 sq ft Venue
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-cinzel font-semibold uppercase tracking-[0.2em] text-amber-400/90 block mb-3">
                  Events & Conferences
                </span>
                <h3 className="font-serif text-3xl font-bold text-white">
                  The NX Elit Banquet Space
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed mt-2 font-light">
                  A versatile 2,000 sq ft hall with advanced AV systems and bespoke degustation catering by NX Kitchen.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-zinc-200">
                <div className="flex items-center space-x-2.5 bg-[#18181f] p-3.5 rounded-xl border border-zinc-800 font-space font-medium">
                  <Users className="w-4 h-4 text-[#d4af37]" />
                  <span>Up to 150 Guests</span>
                </div>
                <div className="flex items-center space-x-2.5 bg-[#18181f] p-3.5 rounded-xl border border-zinc-800 font-space font-medium">
                  <Calendar className="w-4 h-4 text-[#d4af37]" />
                  <span>In-House Catering Packages</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry(undefined, 'banquet')}
                  className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-zinc-200 text-black font-cinzel font-bold text-xs uppercase tracking-[0.16em] rounded-full transition-all flex items-center justify-center space-x-2 shadow-md hover:scale-105 cursor-pointer"
                >
                  <span>Enquire About Banquet & Events</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
