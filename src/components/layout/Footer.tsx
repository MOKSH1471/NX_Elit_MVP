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
                NX ELIT
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-white font-light">
                Boutique Hotel · Kolkata
              </span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              28 rooms across signature colour-coded floors, interiors designed by Vinoo Chadha, NX Kitchen lounge & restaurant, and banquet space on Kolkata's EM Bypass.
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
                Follow NX Elit
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
              <li><a href="#dining" className="hover:text-white transition-colors">NX Kitchen Lounge & Restaurant</a></li>
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
                Interiors designed by Vinoo Chadha.
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} NX Elit Hotel Kolkata. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-zinc-200 transition-colors">Direct Contact Page</Link>
            <span>·</span>
            <span>EM Bypass Corridor, Kolkata</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
