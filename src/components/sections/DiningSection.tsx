'use client';

import React from 'react';
import Image from 'next/image';
import { Wine, Utensils, Flame, Clock, Users, ArrowUpRight } from 'lucide-react';
import { REAL_PHOTOS } from '@/lib/data';
import { ArcReveal } from '@/components/primitives/ArcReveal';

interface DiningSectionProps {
  onOpenEnquiry?: (roomId?: string, type?: 'room' | 'banquet') => void;
}

const DINING_VENUES = [
  {
    id: 'lounge',
    title: 'The Cherry-Red Lounge',
    arcHeading: 'THE CHERRY-RED BAR · 30 SEATS',
    tint: '#2a0713',
    capacity: '30 Seats',
    hours: '12:00 PM – Midnight',
    image: REAL_PHOTOS.nxKitchenLounge,
    aesthetic: 'High-gloss cherry lacquer, velvet banquettes & moody acoustic backlights',
    desc: 'An intimate cocktail salon curated for crafted mixology, fine imported vintages, and artisanal tapas.',
    signatures: ['Smoked Jamun Old Fashioned', 'Truffle Malai Broccoli', 'Charred Plum Bitters'],
    icon: <Wine className="w-4 h-4 text-rose-400" />,
  },
  {
    id: 'restaurant',
    title: 'The Ivory & Gold Restaurant',
    arcHeading: 'IVORY & GOLD FINE DINING · 32 COVERS',
    tint: '#241c09',
    capacity: '32 Covers',
    hours: '7:00 AM – 11:00 PM',
    image: REAL_PHOTOS.nxKitchenRestaurant,
    aesthetic: 'Ivory leatherette, gilded cove lighting & Italian terrazzo',
    desc: 'Modern Indian gastronomy and royal Awadhi classics overseen by Corporate Chef Naresh Kumar.',
    signatures: ['Kasundi Mustard Salmon Tikka', 'Dum Awadhi Subz Handi', 'Heritage Bengal Spices'],
    icon: <Utensils className="w-4 h-4 text-[#d4af37]" />,
  },
  {
    id: 'terrace',
    title: 'Terrace Tandoor & Bakery Café',
    arcHeading: 'TERRACE TANDOOR & BAKERY CAFÉ',
    tint: '#211306',
    capacity: 'Skyline Lounge',
    hours: '8:00 AM – 11:30 PM',
    image: REAL_PHOTOS.nxKitchenBacksplash,
    aesthetic: 'Live charcoal tandoor and ground-floor artisanal roastery',
    desc: 'From sunrise espresso with oven-fresh pastries to sunset charcoal-smoked kebabs under the stars.',
    signatures: ['Charcoal Galouti Kebab', 'Darjeeling First Flush', 'Artisanal Sourdough Bakes'],
    icon: <Flame className="w-4 h-4 text-amber-500" />,
  },
];

export default function DiningSection({ onOpenEnquiry }: DiningSectionProps) {
  return (
    <section id="dining" className="relative bg-[#09090b] text-[#f4f3ef] overflow-hidden">
      {/* One ArcReveal Disc per Venue — Starts directly after the 4th picture */}
      <div className="space-y-0">
        {DINING_VENUES.map((venue, idx) => (
          <ArcReveal
            key={venue.id}
            tint={venue.tint}
            heading={venue.arcHeading}
            className={idx === 0 ? '' : 'border-t border-white/5'}
          >
            <div className="max-w-6xl mx-auto px-6 sm:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Media Column */}
              <div className="lg:col-span-6 relative h-[42vh] sm:h-[50vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src={venue.image}
                  alt={venue.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs">
                  {venue.icon}
                  <span className="font-cinzel uppercase tracking-[0.16em] text-white font-medium">
                    {venue.capacity}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-zinc-300 font-space">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{venue.hours}</span>
                  </div>
                </div>
              </div>

              {/* Text & Signatures Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <span className="font-cinzel text-[10px] tracking-[0.24em] uppercase text-[#d4af37] font-semibold block">
                    Venue Spotlight
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {venue.title}
                  </h3>
                  <p className="font-space text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {venue.desc}
                  </p>
                  <p className="font-space text-xs text-zinc-400 italic">
                    {venue.aesthetic}
                  </p>
                </div>

                {/* Signatures */}
                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold block">
                    Signature Offerings
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {venue.signatures.map((sig) => (
                      <span
                        key={sig}
                        className="font-space text-xs px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-zinc-200"
                      >
                        {sig}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenEnquiry?.(undefined, 'banquet')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-cinzel font-bold text-xs uppercase tracking-[0.16em] hover:bg-zinc-200 transition-colors cursor-pointer"
                  >
                    <span>Reserve at {venue.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </ArcReveal>
        ))}
      </div>
    </section>
  );
}
