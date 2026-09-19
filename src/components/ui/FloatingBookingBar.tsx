'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Users, BedDouble, ArrowRight, ShieldCheck, X } from 'lucide-react';
import { ROOM_CATEGORIES } from '@/lib/data';
import { useScrollJourney } from '@/lib/scroll/ScrollProvider';

interface FloatingBookingBarProps {
  onOpenEnquiry: (roomId?: string, type?: 'room' | 'banquet') => void;
}

export default function FloatingBookingBar({ onOpenEnquiry }: FloatingBookingBarProps) {
  const { pinnedCount } = useScrollJourney();
  const [scrolledPast, setScrolledPast] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string>('executive-deluxe');
  const [guestCount, setGuestCount] = useState<string>('2 Guests');
  const [datesText] = useState<string>('Flexible Dates');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolledPast(true);
      } else {
        setScrolledPast(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisible = scrolledPast && !dismissed && pinnedCount === 0;

  const handleBook = () => {
    onOpenEnquiry(selectedRoomId, 'room');
  };

  return (
    <div
      className={`fixed bottom-6 left-0 right-0 z-40 px-4 sm:px-6 flex justify-center pointer-events-none transition-all duration-350 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      aria-hidden={!isVisible}
    >
      {/* 100% Solid Opaque Luxury Background - Prevents any text bleed-through */}
      <div className="max-w-fit sm:max-w-3xl w-full bg-[#111116] border border-zinc-700/90 rounded-2xl sm:rounded-full p-2 sm:p-1.5 sm:px-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.95)]">
        {/* Direct Booking Guarantee Badge */}
        <div className="hidden lg:flex items-center space-x-1.5 pl-2.5 pr-2.5 border-r border-zinc-800 text-zinc-400 font-medium shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="whitespace-nowrap font-cinzel text-[9px] tracking-[0.16em] uppercase text-zinc-300 font-medium">
            Direct Guarantee
          </span>
        </div>

        {/* Selector 1: Room Category */}
        <div className="flex items-center space-x-2 w-full sm:w-auto px-2.5 py-1 rounded-lg sm:rounded-full bg-zinc-900/80 sm:bg-transparent border border-zinc-800/80 sm:border-0">
          <BedDouble className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
          <div className="flex flex-col text-left">
            <span className="font-cinzel text-[8px] uppercase tracking-[0.2em] text-[#d4af37]/90 font-semibold">
              Category
            </span>
            <select
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
              className="bg-transparent font-space text-[11px] text-white font-medium tracking-wide focus:outline-none cursor-pointer pr-2"
            >
              {ROOM_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id} className="bg-[#121216] text-white font-space text-xs">
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="hidden sm:block h-6 w-[1px] bg-zinc-800 shrink-0" />

        {/* Selector 2: Guest Count */}
        <div className="flex items-center space-x-2 w-full sm:w-auto px-2.5 py-1 rounded-lg sm:rounded-full bg-zinc-900/80 sm:bg-transparent border border-zinc-800/80 sm:border-0">
          <Users className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
          <div className="flex flex-col text-left">
            <span className="font-cinzel text-[8px] uppercase tracking-[0.2em] text-[#d4af37]/90 font-semibold">
              Guests
            </span>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="bg-transparent font-space text-[11px] text-white font-medium tracking-wide focus:outline-none cursor-pointer pr-2"
            >
              <option value="1 Guest" className="bg-[#121216] text-white font-space text-xs">1 Adult</option>
              <option value="2 Guests" className="bg-[#121216] text-white font-space text-xs">2 Adults</option>
              <option value="3+ Guests" className="bg-[#121216] text-white font-space text-xs">3+ Guests</option>
            </select>
          </div>
        </div>

        <div className="hidden sm:block h-6 w-[1px] bg-zinc-800 shrink-0" />

        {/* Selector 3: Date Range */}
        <div
          onClick={handleBook}
          className="flex items-center space-x-2 w-full sm:w-auto px-2.5 py-1 rounded-lg sm:rounded-full bg-zinc-900/80 sm:bg-transparent border border-zinc-800/80 sm:border-0 cursor-pointer hover:bg-zinc-800/60 transition-colors"
        >
          <Calendar className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
          <div className="flex flex-col text-left">
            <span className="font-cinzel text-[8px] uppercase tracking-[0.2em] text-[#d4af37]/90 font-semibold">
              Dates
            </span>
            <span className="font-space text-[11px] text-white font-medium tracking-wide whitespace-nowrap">
              {datesText}
            </span>
          </div>
        </div>

        {/* Primary Action Button & Dismiss */}
        <div className="flex items-center space-x-1.5 w-full sm:w-auto shrink-0">
          <button
            onClick={handleBook}
            className="flex-1 sm:flex-none px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-full bg-white text-black font-cinzel font-bold text-[10px] tracking-[0.12em] uppercase flex items-center justify-center space-x-1.5 hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer whitespace-nowrap"
          >
            <span>Check Rates</span>
            <ArrowRight className="w-3 h-3 text-black shrink-0" />
          </button>

          <button
            onClick={() => setDismissed(true)}
            className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
            title="Dismiss quick booking bar"
            aria-label="Dismiss quick booking bar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
