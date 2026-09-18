"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X } from "lucide-react";
import { HOTEL_INFO } from "@/lib/data";
import { AnimatedBackground } from "@/components/core/animated-background";
import { ScrollProgress } from "@/components/core/scroll-progress";
import { SocialLinks } from "@/components/ui/SocialIcons";

interface NavbarProps {
  onOpenEnquiry: (roomId?: string, type?: 'room' | 'banquet') => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Story", href: "/#story" },
    { name: "Residences", href: "/rooms" },
    { name: "NX Kitchen", href: "/#dining" },
    { name: "Experience", href: "/#experience" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Location", href: "/#location" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "glass-nav py-3 shadow-xl"
            : "bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link href="/" className="group flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-black/60 group-hover:border-white transition-colors">
              <span className="text-white font-serif font-bold text-sm">NX</span>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.22em] text-[#f4f3ef] group-hover:text-white transition-colors">
                NX ELIT
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-zinc-400 font-light -mt-1">
                Kolkata · EM Bypass
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with AnimatedBackground */}
          <nav className="hidden lg:block">
            <AnimatedBackground
              className="rounded-full bg-zinc-800/80 border border-zinc-700/60"
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.3,
              }}
              enableHover
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  data-id={link.name}
                  href={link.href}
                  className="inline-block px-3.5 py-1.5 text-xs uppercase tracking-widest text-zinc-300 hover:text-white font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </AnimatedBackground>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="p-2 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              title="Call Reception"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919830000000"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-emerald-400 hover:bg-emerald-950/40 transition-colors"
              title="WhatsApp Chat"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenEnquiry()}
              className="px-5 py-2.5 bg-white text-black hover:bg-zinc-200 font-semibold text-xs tracking-wider uppercase rounded-full shadow-md transition-all"
            >
              Check Availability
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-3.5 py-1.5 bg-white text-black font-semibold text-[11px] tracking-wider uppercase rounded-full"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 justify-between">
          <nav className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-serif text-2xl font-light tracking-wide text-zinc-200 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="space-y-4 pt-8 border-t border-zinc-800">
            <div className="flex items-center justify-around py-2">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="flex items-center space-x-2 text-sm text-zinc-300"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Desk</span>
              </a>
              <a
                href="https://wa.me/919830000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-sm text-emerald-400"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 bg-white text-black font-semibold text-xs tracking-widest uppercase rounded-lg shadow-md"
            >
              Check Direct Rates & Availability
            </button>

            <div className="pt-4 flex flex-col items-center space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400/90">
                Follow NX Elit
              </span>
              <SocialLinks size="sm" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
