"use client";

import React from "react";
import { MapPin, Plane, Building2, Navigation, Compass } from "lucide-react";
import { HOTEL_INFO } from "@/lib/data";
import { InView } from "@/components/core/in-view";
import { AnimatedGroup } from "@/components/core/animated-group";

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-[#09090b] text-[#f4f3ef] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <InView className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.25em] uppercase text-amber-400/90 block">
            Prime Location & Proximity
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            EM Bypass Corridor, Kolkata
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-md mx-auto">
            Direct arterial connectivity between CCU Airport and Sector V IT hubs.
          </p>
        </InView>

        {/* Distance Cards Grid */}
        <AnimatedGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#121216]/90 border border-zinc-800 space-y-3 shadow-lg hover:border-zinc-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] text-[#d4af37] flex items-center justify-center border border-white/10">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-base font-semibold text-white tracking-tight">CCU Airport</h3>
            <p className="text-xs text-zinc-400 font-mono">
              {HOTEL_INFO.distanceAirport} · 25-min expressway
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121216]/90 border border-zinc-800 space-y-3 shadow-lg hover:border-zinc-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] text-[#d4af37] flex items-center justify-center border border-white/10">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-base font-semibold text-white tracking-tight">Sector V IT Hub</h3>
            <p className="text-xs text-zinc-400 font-mono">
              {HOTEL_INFO.distanceITPark} · 10-min commute
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#121216]/90 border border-zinc-800 space-y-3 shadow-lg hover:border-zinc-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] text-[#d4af37] flex items-center justify-center border border-white/10">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-sans text-base font-semibold text-white tracking-tight">Science City</h3>
            <p className="text-xs text-zinc-400 font-mono">
              ~5 mins · 15 mins to Park Street
            </p>
          </div>
        </AnimatedGroup>

        {/* Map Container */}
        <InView transition={{ delay: 0.2, duration: 0.5 }}>
          <div className="bg-[#121216] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-3">
            <div className="p-8 lg:col-span-1 space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-zinc-400">
                  <MapPin className="w-4 h-4 text-white" />
                  <span>Property Address</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mt-2">
                  NX Elit Hotel
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed mt-2 font-light">
                  {HOTEL_INFO.address}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-800">
                <span className="text-xs text-zinc-400 block font-medium">Navigational Guidance</span>
                <a
                  href="https://maps.google.com/?q=NX+Elit+EM+Bypass+Kolkata"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-zinc-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-3.5 h-3.5 text-white" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 h-80 lg:h-auto min-h-[320px] relative bg-zinc-900">
              <iframe
                title="NX Elit Hotel Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.589886470094!2d88.3985!3d22.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMyJzI0LjAiTiA4OMKwMjMnNTQuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.2)" }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
}
