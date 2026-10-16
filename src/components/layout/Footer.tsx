"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";
import { HOTEL_INFO } from "@/lib/data";
import { SocialLinks } from "@/components/ui/SocialIcons";

interface FooterProps {
  onOpenEnquiry: (roomId?: string, type?: 'room' | 'banquet') => void;
}

export default function Footer({ onOpenEnquiry }: FooterProps) {
  return (
    <footer className="bg-[#070709] border-t border-zinc-800 text-zinc-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-[0.22em] text-[#f4f3ef]">
                THE ELITE
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-white font-light">
                Boutique Luxury Hotel · Kolkata
              </span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              28 rooms across signature colour-coded floors, interiors designed by Studio Arden, The Elite Kitchen & Lounge, and banquet space on Kolkata's EM Bypass.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-white hover:underline transition-colors uppercase tracking-wider"
              >
                <span>Direct Reservations</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="pt-4 space-y-2 border-t border-zinc-800/80">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400/90 block">
                Follow The Elite
              </span>
              <SocialLinks size="sm" />
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-sm text-white uppercase tracking-widest font-semibold mb-4 text-zinc-200">
              Explore Property
            </h4>
            <ul className="space-y-2 text-xs font-light text-zinc-300">
              <li><a href="#hero" className="hover:text-white transition-colors">Overview & Hero</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">Concept & Colour Floors</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Residences & Suites</a></li>
              <li><a href="#dining" className="hover:text-white transition-colors">The Elite Lounge & Restaurant</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Amenities & Banquet Venue</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Verified Guest Reviews</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">EM Bypass Location & Connectivity</a></li>
            </ul>
          </div>

          {/* Signature Floors Concept */}
          <div>
            <h4 className="font-serif text-sm text-white uppercase tracking-widest font-semibold mb-4 text-zinc-200">
              Colour-Coded Floors
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="text-zinc-300 font-light">2nd Floor — Cobalt & Sapphire Blue</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-zinc-300 font-light">3rd & 4th Floor — Emerald Forest Green</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-zinc-300 font-light">5th Floor — Velvet Ruby Red & Suites</span>
              </li>
              <li className="pt-2 text-[11px] text-zinc-400 font-light">
                Interiors designed by Studio Arden.
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-sm text-white uppercase tracking-widest font-semibold mb-4 text-zinc-200">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li className="flex items-start space-x-3 text-zinc-300">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-300">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-white transition-colors">{HOTEL_INFO.phone}</a>
              </li>
              <li className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="https://wa.me/919830000000" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">WhatsApp Reception</a>
              </li>
              <li className="flex items-center space-x-3 text-zinc-300">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-white transition-colors">{HOTEL_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Demo Website Policy Disclaimer */}
        <div className="mt-8 pt-6 border-t border-zinc-800/70 text-center sm:text-left space-y-2">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[10px] uppercase tracking-[0.24em] text-[#d4af37] font-cinzel font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            <span>Demonstration &amp; Concept Portfolio Policy</span>
          </div>
          <p className="text-[11px] text-zinc-400 leading-relaxed font-light max-w-4xl">
            This platform is an interactive design demonstration and architectural concept showcase. All room reservation workflows, pricing models, direct enquiry systems, and hospitality services presented here are simulated exclusively for prototype and evaluation purposes. This website does not process actual commercial transactions or confirm legally binding hotel accommodations.
          </p>
        </div>

        {/* Bottom Bar with Credits & Galileo & Duke Brand Signature */}
        <div className="mt-6 pt-6 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between text-[11px] text-zinc-400 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">
            <p>© {new Date().getFullYear()} The Elite Hotel Kolkata. All rights reserved.</p>
            <span className="hidden sm:inline text-zinc-700">·</span>
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">Built by</span>
              <a
                href="https://www.galileoandduke.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#14171a] border border-zinc-700/60 shadow-sm hover:border-zinc-400 hover:bg-[#1a1e23] transition-all cursor-pointer"
                aria-label="Visit Galileo & Duke"
              >
                <img
                  src="/brand/galileo-and-duke.jpg"
                  alt="Galileo & Duke"
                  className="w-5 h-5 rounded object-cover group-hover:scale-105 transition-transform"
                />
                <span className="font-sans font-bold text-xs tracking-tight text-white leading-none group-hover:text-zinc-100 transition-colors">
                  Galileo <span className="text-zinc-400 font-semibold">&amp;</span> Duke
                </span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-[#d4af37] transition-colors" />
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-[10px]">
              Demo Website
            </span>
            <Link href="/contact" className="hover:text-zinc-200 transition-colors">Direct Contact</Link>
            <span>·</span>
            <span>EM Bypass Corridor, Kolkata</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
