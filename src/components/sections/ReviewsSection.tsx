"use client";

import React from "react";
import { Star, Quote, CheckCircle2, User } from "lucide-react";
import { InView } from "@/components/core/in-view";
import DepthCarousel, { DepthCarouselItem } from "@/components/reactbits/DepthCarousel";

export interface GuestReview extends DepthCarouselItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  category: string;
  quote: string;
  stayDate: string;
}

const REVIEWS: GuestReview[] = [
  {
    id: "rev-1",
    author: "Vikramaditya Roy",
    role: "Managing Director, TechVentures India",
    rating: 5,
    category: "Corporate Executive Stay · 5th Floor Suite",
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
    category: "Executive Residence · 3rd Floor Emerald Green",
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
    category: "Design Stay · 2nd Floor Sapphire Blue",
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
    stayDate: "Stayed Jan 2026",
    quote:
      "Strategic EM Bypass location — 12 km to CCU Airport and direct access to Salt Lake Sector V. Impeccable front desk response and direct concierge booking ease.",
    verified: true,
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-[#09090b] text-[#f4f3ef] relative border-t border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <InView className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold uppercase tracking-widest text-zinc-300">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Verified Guest Experiences</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Endorsed by Discerning Guests
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-xl mx-auto">
            Read verified feedback from corporate leaders, event hosts, and luxury travelers experiencing Kolkata's signature dark boutique address.
          </p>
        </InView>

        {/* 3D Depth Carousel Container */}
        <InView transition={{ delay: 0.1, duration: 0.5 }}>
          <div className="w-full h-[500px] sm:h-[540px] relative">
            <DepthCarousel
              items={REVIEWS}
              cardWidth={350}
              cardHeight={420}
              radius={24}
              tint="#09090b"
              depth={220}
              spread={100}
              tilt={20}
              tiltDirection="right"
              perspective={1400}
              visibleCards={4}
              falloff={0.25}
              blur={6}
              autoplay
              autoplayDelay={4000}
              loop
              showControls
              showIndicators
              renderCard={(rawItem, index, isActive) => {
                const item = rawItem as GuestReview;
                return (
                  <div className="w-full h-full flex flex-col justify-between p-7 bg-[#121216] text-[#f4f3ef] border border-zinc-800 rounded-[24px] relative overflow-hidden select-none">
                    {/* Card Top: Category Tag & Rating Stars */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium truncate max-w-[200px]">
                          {item.category}
                        </span>
                        <div className="flex items-center space-x-1 text-amber-400">
                          {Array.from({ length: item.rating || 5 }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                      </div>

                      <Quote className="w-8 h-8 text-zinc-700 opacity-60" />
                    </div>

                    {/* Card Body: Quote Text */}
                    <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light italic my-auto">
                      "{item.quote}"
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
                          <p className="text-[11px] text-zinc-400 font-light truncate max-w-[170px]">
                            {item.role}
                          </p>
                        </div>
                      </div>

                      {item.verified && (
                        <div className="flex items-center space-x-1 text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-full flex-shrink-0">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </InView>
      </div>
    </section>
  );
}
