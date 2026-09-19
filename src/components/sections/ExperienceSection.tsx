'use client';

import React from 'react';
import Image from 'next/image';
import { Users, Calendar, ArrowRight } from 'lucide-react';
import { REAL_PHOTOS } from '@/lib/data';
import { BevelPanel } from '@/components/primitives/BevelPanel';

interface ExperienceSectionProps {
  onOpenEnquiry?: (roomId?: string, type?: 'room' | 'banquet') => void;
}

export default function ExperienceSection({ onOpenEnquiry }: ExperienceSectionProps) {
  return (
    <section id="experience" className="relative bg-[#09090b] text-[#f4f3ef] overflow-hidden">
      {/* Banquet Scene: The One Light-Canvas Scene (#f4f3ef Cream + Ink Type) using BevelPanel */}
      <BevelPanel tint="#f4f3ef" className="text-[#09090b]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-24 sm:py-32 flex flex-col justify-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Banquet Photography */}
            <div className="lg:col-span-6 relative h-[45vh] sm:h-[60vh] rounded-3xl overflow-hidden shadow-2xl border border-black/10">
              <Image
                src={REAL_PHOTOS.banquetSpace}
                alt="NX Elit 2,000 sq ft Banquet Hall"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute top-6 left-6 bg-[#09090b]/85 text-[#f4f3ef] px-4 py-1.5 rounded-full text-xs font-cinzel uppercase tracking-[0.2em] font-semibold">
                2,000 SQ FT VENUE
              </div>
            </div>

            {/* Right Column: Light Canvas Editorial Description & CTA */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-amber-800 block">
                  Private Events & Conferences
                </span>
                <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#09090b] tracking-tight leading-[1.08]">
                  The NX Elit Banquet Space
                </h3>
                <p className="font-space text-sm sm:text-base text-zinc-700 font-light leading-relaxed">
                  A sunlit, acoustically isolated 2,000 sq ft salon engineered for executive summits, private wedding banquets, and bespoke degustation catering curated exclusively by Corporate Chef Naresh Kumar.
                </p>
              </div>

              {/* Ink Specs Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs font-space">
                <div className="p-4 rounded-2xl bg-black/[0.04] border border-black/10 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-[#09090b]">
                    <Users className="w-4 h-4 text-amber-700" />
                    <span>Up to 150 Guests</span>
                  </div>
                  <p className="text-zinc-600 text-[11px]">Flexible theatre & cluster setups</p>
                </div>

                <div className="p-4 rounded-2xl bg-black/[0.04] border border-black/10 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-[#09090b]">
                    <Calendar className="w-4 h-4 text-amber-700" />
                    <span>NX Kitchen Catering</span>
                  </div>
                  <p className="text-zinc-600 text-[11px]">Custom degustation & buffet menus</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry?.(undefined, 'banquet')}
                  className="px-8 py-4 rounded-full bg-[#09090b] text-[#f4f3ef] hover:bg-zinc-800 font-cinzel font-bold text-xs uppercase tracking-[0.2em] transition-colors shadow-2xl flex items-center gap-3 cursor-pointer"
                >
                  <span>Enquire for Events & Banquets</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </BevelPanel>
    </section>
  );
}
