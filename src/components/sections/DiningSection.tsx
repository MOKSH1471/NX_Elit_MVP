"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wine, 
  Utensils, 
  Flame, 
  Clock, 
  Sparkles, 
  Users, 
  ChefHat, 
  ArrowRight,
  Coffee,
  CheckCircle2
} from "lucide-react";
import { DINING_HIGHLIGHTS, REAL_PHOTOS } from "@/lib/data";
import { ProgressiveBlur } from "@/components/core/progressive-blur";

interface DiningSectionProps {
  onOpenEnquiry: (roomId?: string, type?: 'room' | 'banquet') => void;
}

type DiningTab = "lounge" | "restaurant" | "terrace";

interface VenueDetail {
  id: DiningTab;
  title: string;
  badge: string;
  capacity: string;
  hours: string;
  image: string;
  aesthetic: string;
  description: string;
  glowColor: string;
  themeBorder: string;
  tagline: string;
  signatureOfferings: { name: string; tag: string; notes: string }[];
}

const VENUES: Record<DiningTab, VenueDetail> = {
  lounge: {
    id: "lounge",
    title: "The Cherry-Red Bar Lounge",
    badge: "Cocktail & Mixology",
    capacity: "30 Seats",
    hours: "12:00 PM – Midnight",
    image: REAL_PHOTOS.nxKitchenLounge,
    aesthetic: "High-gloss cherry lacquer, velvet banquettes & moody backlights",
    description:
      "An intimate salon curated for crafted mixology, fine imported vintages, and artisanal tapas.",
    glowColor: "rgba(225, 29, 72, 0.22)",
    themeBorder: "border-rose-500/30",
    tagline: "Late-night cocktails & acoustic jazz",
    signatureOfferings: [
      { name: "Smoked Jamun Old Fashioned", tag: "Mixology", notes: "Charred plum & smoked oak bitters" },
      { name: "Truffle Malai Broccoli", tag: "Tapas", notes: "Cardamom cream & black truffle oil" }
    ]
  },
  restaurant: {
    id: "restaurant",
    title: "The Ivory & Gold Restaurant",
    badge: "Fine Dining",
    capacity: "32 Covers",
    hours: "7:00 AM – 11:00 PM",
    image: REAL_PHOTOS.nxKitchenRestaurant,
    aesthetic: "Ivory leatherette, gilded cove lighting & Italian terrazzo",
    description:
      "Modern Indian gastronomy and royal Awadhi classics overseen by Corporate Chef Naresh Kumar.",
    glowColor: "rgba(212, 175, 55, 0.22)",
    themeBorder: "border-amber-500/30",
    tagline: "Progressive Indian & European gastronomy",
    signatureOfferings: [
      { name: "Kasundi Mustard Salmon Tikka", tag: "Chef's Cut", notes: "Heritage Bengal mustard & saffron" },
      { name: "Dum Awadhi Subz Handi", tag: "Heritage", notes: "Clay pot basmati & rose water" }
    ]
  },
  terrace: {
    id: "terrace",
    title: "Terrace Tandoor & Bakery Café",
    badge: "Al Fresco & Roastery",
    capacity: "Skyline Lounge & Café",
    hours: "8:00 AM – 11:30 PM",
    image: REAL_PHOTOS.nxKitchenBacksplash,
    aesthetic: "Live charcoal tandoor and ground-floor artisanal bakery",
    description:
      "From sunrise espresso with oven-fresh pastries to sunset charcoal-smoked kebabs under the stars.",
    glowColor: "rgba(245, 158, 11, 0.2)",
    themeBorder: "border-amber-500/30",
    tagline: "Live charcoal fire & artisanal bakes",
    signatureOfferings: [
      { name: "Charcoal Galouti Kebab", tag: "Live Grill", notes: "Spiced mince & saffron sheermal" },
      { name: "Darjeeling First Flush", tag: "Estate Brew", notes: "High-altitude handpicked floral tea" }
    ]
  }
};

export default function DiningSection({ onOpenEnquiry }: DiningSectionProps) {
  const [activeTab, setActiveTab] = useState<DiningTab>("lounge");
  const venue = VENUES[activeTab];

  return (
    <section id="dining" className="py-24 sm:py-32 bg-[#09090b] text-[#f4f3ef] relative border-t border-b border-zinc-800/80 overflow-hidden">
      {/* Dynamic Ambient Background Glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none -z-0 transition-colors duration-1000"
        style={{ backgroundColor: venue.glowColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14 sm:space-y-18">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] sm:text-xs font-cinzel font-semibold tracking-[0.25em] uppercase text-amber-400/90 block">
            Signature Gastronomy · 2,200 sq ft
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            {DINING_HIGHLIGHTS.name}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto">
            Artisanal mixology and modern Indian gastronomy masterminded by Corporate Chef Naresh Kumar.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl max-w-xl mx-auto shadow-2xl backdrop-blur-md">
          <button
            onClick={() => setActiveTab("lounge")}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-cinzel font-semibold tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer ${
              activeTab === "lounge"
                ? "bg-rose-950/80 text-rose-200 border border-rose-500/40 shadow-lg shadow-rose-950/50"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
            }`}
          >
            <Wine className="w-4 h-4 text-rose-400" />
            <span>Cherry-Red Lounge</span>
          </button>

          <button
            onClick={() => setActiveTab("restaurant")}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-cinzel font-semibold tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer ${
              activeTab === "restaurant"
                ? "bg-amber-950/80 text-amber-200 border border-amber-500/40 shadow-lg shadow-amber-950/50"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
            }`}
          >
            <Utensils className="w-4 h-4 text-amber-400" />
            <span>Ivory & Gold Dining</span>
          </button>

          <button
            onClick={() => setActiveTab("terrace")}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-cinzel font-semibold tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer ${
              activeTab === "terrace"
                ? "bg-orange-950/80 text-orange-200 border border-orange-500/40 shadow-lg shadow-orange-950/50"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
            }`}
          >
            <Flame className="w-4 h-4 text-orange-400" />
            <span>Tandoor & Café</span>
          </button>
        </div>

        {/* Selected Venue Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101014]/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
          >
            {/* Visual Column */}
            <div className="lg:col-span-6 relative group overflow-hidden rounded-2xl border border-zinc-800/80 shadow-2xl min-h-[340px] sm:min-h-[440px]">
              <ProgressiveBlur
                src={venue.image}
                alt={venue.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                wrapperClassName="w-full h-full min-h-[340px] sm:min-h-[440px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Floating badges on photo */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-cinzel font-semibold tracking-[0.16em] uppercase bg-black/75 backdrop-blur-md border border-white/15 text-white shadow-md flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>{venue.capacity}</span>
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-cinzel font-semibold tracking-[0.16em] uppercase bg-black/75 backdrop-blur-md border border-white/15 text-zinc-300 shadow-md flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{venue.hours}</span>
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-xs font-space font-light text-zinc-300 italic bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                "{venue.tagline}"
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="lg:col-span-6 space-y-6 lg:pl-4">
              <div className="space-y-2">
                <span className="text-[11px] font-cinzel tracking-[0.22em] uppercase text-amber-400/90 font-semibold block">
                  {venue.badge}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {venue.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {venue.aesthetic}
                </p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                {venue.description}
              </p>

              {/* Signature Tastings */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-cinzel uppercase tracking-[0.18em] text-zinc-300 font-semibold flex items-center space-x-2">
                  <ChefHat className="w-4 h-4 text-amber-400" />
                  <span>Curated Highlights & Pairings</span>
                </h4>

                <div className="space-y-2.5">
                  {venue.signatureOfferings.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex items-start justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs sm:text-sm font-space font-semibold text-white">
                            {item.name}
                          </span>
                          <span className="text-[9px] uppercase font-cinzel px-2 py-0.5 rounded-md bg-zinc-800/80 text-[#d4af37] border border-zinc-700/80 font-semibold tracking-[0.14em]">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-[11px] font-space text-zinc-400 font-light mt-0.5 tracking-wide">
                          {item.notes}
                        </p>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-amber-400/70 flex-shrink-0 mt-1" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenEnquiry(undefined, "banquet")}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-cinzel font-bold text-xs uppercase tracking-[0.16em] shadow-lg shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <span>Reserve Table or Private Dining</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="text-xs text-zinc-400 font-space font-medium flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Corporate In-Room Dining 24/7</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Minimal Culinary Credit Strip */}
        <div className="py-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p className="font-serif text-sm sm:text-base text-zinc-300 italic">
            &ldquo;Gastronomy at NX Elit pairs Bengal&apos;s culinary heritage with progressive global techniques.&rdquo;
            <span className="font-cinzel text-[11px] not-italic text-amber-400/90 font-semibold ml-2">— Chef Naresh Kumar</span>
          </p>
          <span className="font-space text-[11px] uppercase tracking-wider text-zinc-400 font-medium whitespace-nowrap">
            24/7 Room Service · 32 Covers · 30-Seat Lounge
          </span>
        </div>
      </div>
    </section>
  );
}
