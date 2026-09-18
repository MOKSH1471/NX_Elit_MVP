"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, BedDouble, ArrowRight, ShieldCheck, X } from "lucide-react";
import { ROOM_CATEGORIES } from "@/lib/data";

interface FloatingBookingBarProps {
  onOpenEnquiry: (roomId?: string, type?: 'room' | 'banquet') => void;
}

export default function FloatingBookingBar({ onOpenEnquiry }: FloatingBookingBarProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string>("executive-deluxe");
  const [guestCount, setGuestCount] = useState<string>("2 Guests");
  const [datesText] = useState<string>("Flexible Dates");

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling past the Hero section (approx 400px)
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBook = () => {
    onOpenEnquiry(selectedRoomId, "room");
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none flex justify-center"
        >
          {/* 100% Solid Opaque Luxury Background - Prevents any text bleed-through */}
          <div className="pointer-events-auto max-w-4xl w-full bg-[#111116] border border-zinc-700/90 rounded-2xl sm:rounded-full p-2.5 sm:p-2 sm:pr-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
            {/* Direct Booking Guarantee Badge */}
            <div className="hidden lg:flex items-center space-x-2 pl-4 pr-3 border-r border-zinc-800 text-[11px] text-zinc-400 font-medium shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span className="whitespace-nowrap font-cinzel text-[10px] tracking-[0.18em] uppercase text-zinc-300 font-medium">Direct Guarantee</span>
            </div>

            {/* Selector 1: Room Category */}
            <div className="flex items-center space-x-2.5 w-full sm:w-auto px-3 py-1.5 rounded-lg sm:rounded-full bg-zinc-900/80 sm:bg-transparent border border-zinc-800/80 sm:border-0">
              <BedDouble className="w-4 h-4 text-[#d4af37] shrink-0" />
              <div className="flex flex-col text-left">
                <span className="font-cinzel text-[9px] uppercase tracking-[0.22em] text-[#d4af37]/90 font-semibold">Category</span>
                <select
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="bg-transparent font-space text-xs text-white font-medium tracking-wide focus:outline-none cursor-pointer pr-4"
                >
                  {ROOM_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id} className="bg-[#121216] text-white font-space">
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="hidden sm:block h-7 w-[1px] bg-zinc-800 shrink-0" />

            {/* Selector 2: Guest Count */}
            <div className="flex items-center space-x-2.5 w-full sm:w-auto px-3 py-1.5 rounded-lg sm:rounded-full bg-zinc-900/80 sm:bg-transparent border border-zinc-800/80 sm:border-0">
              <Users className="w-4 h-4 text-[#d4af37] shrink-0" />
              <div className="flex flex-col text-left">
                <span className="font-cinzel text-[9px] uppercase tracking-[0.22em] text-[#d4af37]/90 font-semibold">Guests</span>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="bg-transparent font-space text-xs text-white font-medium tracking-wide focus:outline-none cursor-pointer pr-4"
                >
                  <option value="1 Guest" className="bg-[#121216] text-white font-space">1 Adult</option>
                  <option value="2 Guests" className="bg-[#121216] text-white font-space">2 Adults</option>
                  <option value="3+ Guests" className="bg-[#121216] text-white font-space">3+ Guests</option>
                </select>
              </div>
            </div>

            <div className="hidden sm:block h-7 w-[1px] bg-zinc-800 shrink-0" />

            {/* Selector 3: Date Range */}
            <div
              onClick={handleBook}
              className="flex items-center space-x-2.5 w-full sm:w-auto px-3 py-1.5 rounded-lg sm:rounded-full bg-zinc-900/80 sm:bg-transparent border border-zinc-800/80 sm:border-0 cursor-pointer hover:bg-zinc-800/60 transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#d4af37] shrink-0" />
              <div className="flex flex-col text-left">
                <span className="font-cinzel text-[9px] uppercase tracking-[0.22em] text-[#d4af37]/90 font-semibold">Dates</span>
                <span className="font-space text-xs text-white font-medium tracking-wide whitespace-nowrap">{datesText}</span>
              </div>
            </div>

            {/* Primary Action Button & Dismiss */}
            <div className="flex items-center space-x-2 w-full sm:w-auto shrink-0">
              <button
                onClick={handleBook}
                className="flex-1 sm:flex-none px-4 py-2 rounded-xl sm:rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa7c11] text-black font-cinzel font-bold text-[10px] sm:text-[11px] tracking-[0.08em] sm:tracking-[0.1em] uppercase flex items-center justify-center space-x-1.5 hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_16px_rgba(212,175,55,0.3)] cursor-pointer whitespace-nowrap"
              >
                <span>Check Rates</span>
                <ArrowRight className="w-3 h-3 text-black shrink-0" />
              </button>

              <button
                onClick={() => setDismissed(true)}
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
                title="Dismiss quick booking bar"
                aria-label="Dismiss quick booking bar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
