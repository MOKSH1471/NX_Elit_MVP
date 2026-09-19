"use client";

import React from "react";
import { Star, Quote, CheckCircle2, User, Award, ShieldCheck } from "lucide-react";
import DepthCarousel, { DepthCarouselItem } from "@/components/reactbits/DepthCarousel";

export interface GuestReview extends DepthCarouselItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  category: string;
  quote: string;
  stayDate: string;
  floorBadge?: string;
}

const REVIEWS: GuestReview[] = [
  {
    id: "rev-1",
    author: "Vikramaditya Roy",
    role: "Managing Director, TechVentures India",
    rating: 5,
    category: "Corporate Executive Stay",
    floorBadge: "Level 05 · Ruby Suite",
    stayDate: "Stayed Jan 2026",
    quote:
      "The Vinoo Chadha interiors give NX Elit a distinct, moody elegance that sets it apart from generic business hotels. Quiet rooms, fast Wi-Fi, and 10 minutes to Sector V.",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Sneha & Rahul Banerjee",
    role: "Wedding Reception Hosts",
    rating: 5,
    category: "Banquet Hall Event · 140 Guests",
    floorBadge: "Banquet Hall & NX Kitchen",
    stayDate: "Hosted Dec 2025",
    quote:
      "We hosted our evening reception in the 2,000 sq ft banquet space. The in-house catering by Corporate Chef Naresh Kumar was outstanding and management handled every detail seamlessly.",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Dr. Ananya Sen",
    role: "Senior Consultant, Apollo Gleneagles",
    rating: 5,
    category: "Executive Residence",
    floorBadge: "Level 03 · Emerald Deluxe",
    stayDate: "Stayed Feb 2026",
    quote:
      "NX Kitchen lounge is unmatched along the EM Bypass corridor. The artisanal cocktails and quiet atmosphere make it ideal for unwinding after hospital conferences.",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Pritam Mukhopadhyay",
    role: "Principal Architect, Studio Form",
    rating: 5,
    category: "Design Architecture Stay",
    floorBadge: "Level 02 · Sapphire Deluxe",
    stayDate: "Stayed Jan 2026",
    quote:
      "The colour-coded floor concept is brilliant design execution. The dark moody lighting and custom acoustic isolation make resting exceptionally peaceful.",
    verified: true,
  },
  {
    id: "rev-5",
    author: "Devika & Rohan Mehta",
    role: "Weekend Staycationers",
    rating: 5,
    category: "Luxury Suite Staycation",
    floorBadge: "Level 05 · Ruby Suite",
    stayDate: "Stayed Feb 2026",
    quote:
      "Luxurious, intimate, and beautifully lit. The suite on the Ruby Red floor felt like a private boutique sanctuary right in the heart of Kolkata.",
    verified: true,
  },
  {
    id: "rev-6",
    author: "Arjun Singhania",
    role: "VP Operations, Cognizant",
    rating: 5,
    category: "Corporate Conference Guest",
    floorBadge: "Level 04 · Super Deluxe",
    stayDate: "Stayed Jan 2026",
    quote:
      "Strategic EM Bypass location — 12 km to CCU Airport and direct access to Salt Lake Sector V. Impeccable front desk response and direct concierge booking ease.",
    verified: true,
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#09090b] text-[#f4f3ef] relative border-t border-b border-zinc-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] sm:text-xs font-cinzel font-semibold tracking-[0.25em] uppercase text-amber-400/90 block">
            Verified Guest Accolades
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Endorsed by Discerning Guests
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-md mx-auto">
            Verified feedback from corporate leaders and discerning travelers.
          </p>
        </div>

        {/* Minimal Metrics Bar */}
        <div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-center py-4 border-y border-zinc-800/60 max-w-3xl mx-auto">
            <div className="space-y-0.5">
              <span className="font-space text-2xl font-bold text-white block tracking-tight">4.9 ★</span>
              <span className="text-[10px] font-cinzel uppercase tracking-[0.16em] text-zinc-400 font-semibold">Design & Ambiance</span>
            </div>
            <div className="space-y-0.5">
              <span className="font-space text-2xl font-bold text-white block tracking-tight">4.9 ★</span>
              <span className="text-[10px] font-cinzel uppercase tracking-[0.16em] text-zinc-400 font-semibold">EM Bypass</span>
            </div>
            <div className="space-y-0.5">
              <span className="font-space text-2xl font-bold text-white block tracking-tight">4.8 ★</span>
              <span className="text-[10px] font-cinzel uppercase tracking-[0.16em] text-zinc-400 font-semibold">NX Kitchen</span>
            </div>
            <div className="space-y-0.5">
              <span className="font-space text-2xl font-bold text-white block tracking-tight">5.0 ★</span>
              <span className="text-[10px] font-cinzel uppercase tracking-[0.16em] text-zinc-400 font-semibold">Host Service</span>
            </div>
          </div>
        </div>

        {/* 3D Depth Carousel Container */}
        <div>
          <div className="w-full h-[520px] sm:h-[560px] relative">
            <DepthCarousel
              items={REVIEWS}
              cardWidth={360}
              cardHeight={440}
              radius={24}
              tint="#09090b"
              depth={220}
              spread={110}
              tilt={18}
              tiltDirection="right"
              perspective={1400}
              visibleCards={4}
              falloff={0.25}
              blur={6}
              autoplay
              autoplayDelay={4500}
              loop
              showControls
              showIndicators
              renderCard={(rawItem) => {
                const item = rawItem as GuestReview;
                return (
                  <div className="w-full h-full flex flex-col justify-between p-7 bg-[#121216]/95 text-[#f4f3ef] border border-zinc-800 hover:border-zinc-700 rounded-[24px] relative overflow-hidden select-none shadow-2xl backdrop-blur-md transition-all">
                    {/* Card Top: Category Tag & Rating Stars */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-cinzel uppercase tracking-[0.16em] text-zinc-300 font-semibold truncate max-w-[200px]">
                            {item.category}
                          </span>
                          {item.floorBadge && (
                            <span className="text-[10px] font-space text-amber-400/90 mt-0.5 font-medium tracking-wide">
                              {item.floorBadge}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center space-x-1 text-amber-400">
                          {Array.from({ length: item.rating || 5 }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                      </div>

                      <Quote className="w-7 h-7 text-amber-400/20" />
                    </div>

                    {/* Card Body: Quote Text */}
                    <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light italic my-auto">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* Card Footer: Author & Verification */}
                    <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white flex-shrink-0">
                          <User className="w-5 h-5 text-zinc-300" />
                        </div>
                        <div>
                          <h4 className="font-serif text-base font-semibold text-white leading-tight">
                            {item.author}
                          </h4>
                          <p className="text-[11px] font-space text-zinc-400 font-light truncate max-w-[170px]">
                            {item.role}
                          </p>
                        </div>
                      </div>

                      {item.verified && (
                        <div className="flex items-center space-x-1 text-[10px] font-space uppercase tracking-wider text-emerald-400 flex-shrink-0 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </div>

        {/* Footer Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-4 text-xs font-space font-medium text-zinc-400">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>100% Verified Guest Reviews</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Direct Reservation Rate Guarantee</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-amber-400" />
            <span>TripAdvisor Certificate of Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
