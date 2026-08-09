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
  Clock: <Clock className="w-5 h-5 text-white" />,
  Utensils: <Utensils className="w-5 h-5 text-white" />,
  Wifi: <Wifi className="w-5 h-5 text-white" />,
  Car: <Car className="w-5 h-5 text-white" />,
  Shirt: <Shirt className="w-5 h-5 text-white" />,
  Plane: <Plane className="w-5 h-5 text-white" />,
};

export default function ExperienceSection({ onOpenEnquiry }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24 bg-[#09090b] text-[#f4f3ef] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <InView className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Services & Event Venues
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Amenities & Banquet Venue
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-xl mx-auto">
            Hospitality services tailored for EM Bypass corporate guests, alongside a versatile 2,000 sq ft banquet hall for offsites & celebrations.
          </p>
        </InView>

        {/* Horizontal Amenities Grid */}
        <AnimatedGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#121216] border border-zinc-800 space-y-3 shadow-lg hover:border-zinc-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#181820] border border-zinc-800 flex items-center justify-center">
                {AMENITY_ICONS[item.icon]}
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                {item.desc}
              </p>
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
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-zinc-800 font-medium">
                2,000 sq ft Venue
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-300 bg-zinc-800 border border-zinc-700 mb-3">
                  Events & Conferences
                </span>
                <h3 className="font-serif text-3xl font-bold text-white">
                  The NX Elit Banquet Space
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed mt-3 font-light">
                  Host corporate offsites, executive seminars, intimate receptions, and private celebrations in a sophisticated venue equipped with state-of-the-art AV equipment and in-house catering by NX Kitchen.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-zinc-300">
                <div className="flex items-center space-x-2.5 bg-[#18181f] p-3 rounded-xl border border-zinc-800">
                  <Users className="w-4 h-4 text-white" />
                  <span>Up to 150 Guests</span>
                </div>
                <div className="flex items-center space-x-2.5 bg-[#18181f] p-3 rounded-xl border border-zinc-800">
                  <Calendar className="w-4 h-4 text-white" />
                  <span>In-House Catering Packages</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry(undefined, 'banquet')}
                  className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center space-x-2 shadow-md"
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
