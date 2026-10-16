'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { HOTEL_INFO } from '@/lib/data';

export function NavCluster() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 60) {
        setIsVisible(true);
      } else if (currentY > lastScrollY.current + 8) {
        // Scrolling down -> hide navbar so cards are completely unobstructed
        setIsVisible(false);
      } else if (currentY < lastScrollY.current - 12) {
        // Scrolling up -> reveal navbar
        setIsVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenEnquiry = (type: 'room' | 'banquet' = 'room') => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-enquiry', { detail: { type } }));
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 sm:left-8 sm:right-8 z-40 flex items-center justify-between px-6 py-3 rounded-full bg-[#09090b]/80 backdrop-blur-md border border-white/10 select-none text-[#f4f3ef] transition-all duration-300 shadow-2xl ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
        }`}
        aria-label="Main Navigation"
      >
        {/* Left Brand Wordmark */}
        <Link
          href="/"
          className="font-serif font-bold tracking-[0.2em] text-xs sm:text-sm uppercase text-white hover:text-[#d4af37] transition-colors"
        >
          THE ELITE
        </Link>

        {/* Desktop Cluster: Exactly 3 items */}
        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => handleOpenEnquiry('room')}
            className="font-serif italic font-bold text-sm tracking-tight underline underline-offset-4 cursor-pointer hover:text-[#d4af37] transition-colors focus-visible:ring-1 focus-visible:ring-current focus-visible:outline-none rounded-xs"
          >
            RESERVE A RESIDENCE
          </button>

          <button
            onClick={() => handleOpenEnquiry('banquet')}
            className="font-cinzel text-[10px] tracking-[0.24em] uppercase font-semibold cursor-pointer hover:text-[#d4af37] transition-colors focus-visible:ring-1 focus-visible:ring-current focus-visible:outline-none rounded-xs"
          >
            ENQUIRE
          </button>

          <Link
            href="/contact"
            className="font-cinzel text-[10px] tracking-[0.24em] uppercase font-semibold hover:text-[#d4af37] transition-colors focus-visible:ring-1 focus-visible:ring-current focus-visible:outline-none rounded-xs"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-1 cursor-pointer hover:text-[#d4af37] transition-colors"
          aria-label={mobileOpen ? 'Close Navigation' : 'Open Navigation'}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* User-Triggered Mobile Menu Drawer (Framer Motion is permitted here) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#09090b] flex flex-col justify-between p-8 text-[#f4f3ef]"
          >
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-6">
              <span className="font-serif font-bold tracking-[0.2em] text-lg">THE ELITE</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-zinc-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-8 py-8">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  handleOpenEnquiry('room');
                }}
                className="text-left font-serif text-3xl font-bold italic tracking-tight"
              >
                Reserve a Residence
              </button>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  handleOpenEnquiry('banquet');
                }}
                className="text-left font-cinzel text-sm uppercase tracking-[0.28em] text-zinc-300"
              >
                Private Banquets & Events
              </button>

              <Link
                href="/rooms"
                onClick={() => setMobileOpen(false)}
                className="font-cinzel text-sm uppercase tracking-[0.28em] text-zinc-300"
              >
                Floor & Suites Catalog
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="font-cinzel text-sm uppercase tracking-[0.28em] text-zinc-300"
              >
                Reception Desk & Location
              </Link>
            </div>

            <div className="pt-6 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <a href={`tel:${HOTEL_INFO.phone}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="w-4 h-4" />
                <span>{HOTEL_INFO.phone}</span>
              </a>
              <a href="https://wa.me/919830000000" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-emerald-400">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
