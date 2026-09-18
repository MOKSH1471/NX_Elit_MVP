"use client";

import React, { useState } from "react";
import {
  Maximize2,
  BedDouble,
  Users,
  Check,
  ArrowRight,
  Info,
  X,
  ShieldCheck,
  LayoutGrid,
  Rows3,
  Sparkles,
  VolumeX,
  Compass,
} from "lucide-react";
import { ROOM_CATEGORIES, RoomCategory } from "@/lib/data";
import { InView } from "@/components/core/in-view";
import { ProgressiveBlur } from "@/components/core/progressive-blur";

interface RoomsSectionProps {
  onOpenEnquiry: (roomId?: string, type?: "room" | "banquet") => void;
}

export default function RoomsSection({ onOpenEnquiry }: RoomsSectionProps) {
  const [selectedRoom, setSelectedRoom] = useState<RoomCategory | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"editorial" | "grid">("editorial");

  const filterOptions = [
    { id: "all", label: "All Residences (4)", floor: "All Levels" },
    { id: "2nd", label: "2nd Floor", floor: "Sapphire Blue", color: "#3b82f6" },
    { id: "3rd-4th", label: "3rd & 4th Floors", floor: "Emerald Green", color: "#10b981" },
    { id: "5th", label: "5th Floor Suites", floor: "Ruby Red", color: "#f43f5e" },
  ];

  const filteredRooms = ROOM_CATEGORIES.filter((r) => {
    if (selectedFloor === "all") return true;
    if (selectedFloor === "2nd") return r.floorTheme.includes("2nd Floor");
    if (selectedFloor === "3rd-4th") return r.floorTheme.includes("3rd") || r.floorTheme.includes("4th");
    if (selectedFloor === "5th") return r.floorTheme.includes("5th");
    return true;
  });

  return (
    <section id="rooms" className="py-20 bg-[#09090b] text-[#f4f3ef] relative overflow-hidden">
      {/* Ambient Floor Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-amber-950/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Page Editorial Header */}
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center space-x-3">
            <span className="text-[11px] font-cinzel tracking-[0.25em] uppercase text-amber-400/90 font-semibold">
              ACCOMMODATIONS // 28 BESPOKE SANCTUARIES
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-xs text-zinc-400 font-space font-medium tracking-wider">VINOO CHADHA INTERIORS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Residences & Signature Suites
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl">
            Each floor at NX Elit embodies a curated chromatic mood — from tranquil sapphire and botanical emerald to the private ruby suites on the crown level. All 28 sanctuaries feature custom acoustic glazing, ambient lighting, and bespoke furnishings.
          </p>
        </div>

        {/* Filter & View Switcher Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
          {/* Floor Level Filter Tabs */}
          <div className="flex items-center space-x-1 sm:space-x-2 p-1.5 rounded-2xl bg-[#121216] border border-zinc-800 overflow-x-auto w-full sm:w-auto">
            {filterOptions.map((opt) => {
              const active = selectedFloor === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedFloor(opt.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-cinzel font-semibold tracking-[0.14em] uppercase transition-all duration-300 shrink-0 flex items-center space-x-2 cursor-pointer ${
                    active
                      ? "bg-white text-black shadow-md"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {opt.color && (
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: opt.color }}
                    />
                  )}
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Switcher (Editorial Split vs Architectural Grid) */}
          <div className="flex items-center space-x-1 p-1 rounded-xl bg-[#121216] border border-zinc-800 self-end sm:self-auto">
            <button
              onClick={() => setViewMode("editorial")}
              title="Editorial Split Showcase"
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                viewMode === "editorial"
                  ? "bg-white/10 text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Rows3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              title="Architectural Grid View"
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                viewMode === "grid"
                  ? "bg-white/10 text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ----------------- VIEW MODE 1: EDITORIAL SPLIT SHOWCASE (DEFAULT) ----------------- */}
        {viewMode === "editorial" && (
          <div className="space-y-12">
            {filteredRooms.map((room, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <InView
                  key={room.id}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                >
                  <div className="luxury-glass-elevated bg-[#0e0e12]/90 rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl group">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                      {/* Image Column */}
                      <div
                        className={`lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] w-full overflow-hidden ${
                          isEven ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        <ProgressiveBlur
                          src={room.image}
                          alt={room.name}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          wrapperClassName="w-full h-full"
                          sizes="(max-width: 1024px) 100vw, 58vw"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-5 left-5 flex items-center space-x-2">
                          <div
                            className="px-3.5 py-1 rounded-full text-[10px] font-cinzel uppercase tracking-[0.18em] backdrop-blur-md border font-semibold flex items-center space-x-1.5"
                            style={{
                              backgroundColor: "rgba(0,0,0,0.75)",
                              borderColor: `${room.floorColorHex}66`,
                              color: room.floorColorHex,
                            }}
                          >
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: room.floorColorHex }}
                            />
                            <span>{room.floorTheme}</span>
                          </div>
                        </div>

                        {/* Direct Booking Best Rate Guarantee */}
                        <div className="absolute bottom-5 left-5 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 flex items-center space-x-2 text-xs">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span className="font-cinzel text-[10px] tracking-[0.16em] uppercase font-semibold text-amber-300">Direct Guarantee</span>
                        </div>

                        {/* Index Indicator */}
                        <div className="absolute bottom-5 right-5 font-space text-xs tracking-widest text-zinc-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 font-medium">
                          0{idx + 1} // 0{filteredRooms.length}
                        </div>
                      </div>

                      {/* Content & Specifications Column */}
                      <div
                        className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 ${
                          isEven ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        <div className="space-y-4">
                          {/* Code & Area */}
                          <div className="flex items-center justify-between text-xs border-b border-zinc-800/80 pb-3">
                            <span className="font-cinzel text-[10px] tracking-[0.22em] uppercase text-amber-400/90 font-semibold">
                              Sanctuary Class
                            </span>
                            <span className="font-space text-xs text-zinc-300 font-medium tracking-wide">{room.sqft} · {room.bed}</span>
                          </div>

                          {/* Room Name */}
                          <div>
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                              {room.name}
                            </h2>
                            <p className="font-space text-xs text-zinc-400 tracking-wide mt-1 font-light">
                              {room.tagline}
                            </p>
                          </div>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                            {room.description}
                          </p>

                          {/* Architectural Key Specs Grid */}
                          <div className="grid grid-cols-2 gap-3 py-3.5 border-y border-zinc-800/80 text-xs">
                            <div className="flex items-center space-x-2.5 text-zinc-200">
                              <Maximize2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                              <span className="font-space font-medium tracking-wide">{room.sqft} Space</span>
                            </div>
                            <div className="flex items-center space-x-2.5 text-zinc-200">
                              <BedDouble className="w-4 h-4 text-[#d4af37] shrink-0" />
                              <span className="font-space font-medium tracking-wide">{room.bed}</span>
                            </div>
                            <div className="flex items-center space-x-2.5 text-zinc-200">
                              <Users className="w-4 h-4 text-[#d4af37] shrink-0" />
                              <span className="font-space font-medium tracking-wide">{room.capacity}</span>
                            </div>
                            <div className="flex items-center space-x-2.5 text-zinc-200">
                              <VolumeX className="w-4 h-4 text-[#d4af37] shrink-0" />
                              <span className="font-space font-medium tracking-wide">Acoustic Glazing</span>
                            </div>
                          </div>

                          {/* Curated Amenity Highlights */}
                          <div className="space-y-2">
                            <span className="text-[10px] uppercase font-cinzel tracking-[0.22em] text-[#d4af37] font-semibold block">
                              Signature Inclusions
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {room.amenities.slice(0, 4).map((a) => (
                                <span
                                  key={a}
                                  className="text-[11px] font-space px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-zinc-300 font-light tracking-wide"
                                >
                                  {a}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Price & Action Strip */}
                        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-cinzel font-semibold block">
                              From
                            </span>
                            <div className="flex items-baseline space-x-1.5">
                              <span className="font-space text-3xl font-bold text-white tracking-tight">
                                {room.priceStarting.split(" ")[0]}
                              </span>
                              <span className="font-space text-[11px] text-zinc-400 font-light">
                                / night + taxes
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2.5">
                            <button
                              onClick={() => setSelectedRoom(room)}
                              className="p-3 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors border border-white/10 cursor-pointer"
                              title="View Complete Specifications"
                            >
                              <Info className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => onOpenEnquiry(room.id, "room")}
                              className="px-6 py-3 bg-white hover:bg-zinc-200 text-black font-cinzel font-bold text-xs uppercase tracking-[0.16em] rounded-full transition-all shadow-lg hover:scale-105 cursor-pointer flex items-center space-x-2"
                            >
                              <span>Reserve Sanctuary</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </InView>
              );
            })}
          </div>
        )}

        {/* ----------------- VIEW MODE 2: ARCHITECTURAL 2-COLUMN GRID ----------------- */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredRooms.map((room, idx) => (
              <InView
                key={room.id}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
              >
                <div className="luxury-glass-elevated bg-[#0e0e12]/90 rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl flex flex-col justify-between h-full group">
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                    <ProgressiveBlur
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      wrapperClassName="w-full h-full"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-[10px] font-cinzel uppercase tracking-[0.18em] backdrop-blur-md border font-semibold flex items-center space-x-1.5"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.75)",
                        borderColor: `${room.floorColorHex}66`,
                        color: room.floorColorHex,
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: room.floorColorHex }}
                      />
                      <span>{room.floorTheme}</span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 font-space text-xs text-white font-semibold">
                      {room.priceStarting}
                    </div>
                  </div>

                  <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-cinzel text-[10px] tracking-[0.22em] uppercase text-amber-400/90 font-semibold">0{idx + 1} // RESIDENCE</span>
                        <span className="font-space text-xs text-zinc-400 font-medium">{room.sqft}</span>
                      </div>

                      <h2 className="font-serif text-3xl font-bold text-white">
                        {room.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed line-clamp-2">
                        {room.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-2.5 px-3 bg-white/[0.03] rounded-xl border border-white/5 text-[11px] text-zinc-200 font-space font-medium">
                      <div className="flex items-center space-x-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span className="truncate">{room.sqft}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <BedDouble className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span className="truncate">{room.bed}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span className="truncate">{room.capacity.split(" ")[0]} Max</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedRoom(room)}
                        className="p-3 rounded-full bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors border border-white/10 cursor-pointer"
                        title="View Full Specifications"
                      >
                        <Info className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onOpenEnquiry(room.id, "room")}
                        className="px-6 py-3 bg-white hover:bg-zinc-200 text-black font-cinzel font-bold text-xs uppercase tracking-[0.16em] rounded-full transition-all shadow-md flex items-center space-x-2 cursor-pointer hover:scale-105"
                      >
                        <span>Reserve Sanctuary</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </InView>
            ))}
          </div>
        )}

        {/* Guaranteed Inclusions Strip */}
        <InView className="pt-8 border-t border-zinc-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-xs font-cinzel uppercase text-amber-400/90 tracking-[0.18em] font-semibold block">
                Acoustic Glazing
              </span>
              <p className="text-[11px] font-space text-zinc-400 font-light">Double-insulated windows for deep silence</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-xs font-cinzel uppercase text-amber-400/90 tracking-[0.18em] font-semibold block">
                Vinoo Chadha Design
              </span>
              <p className="text-[11px] font-space text-zinc-400 font-light">Bespoke furniture & curated color themes</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-xs font-cinzel uppercase text-amber-400/90 tracking-[0.18em] font-semibold block">
                Direct Rate Guarantee
              </span>
              <p className="text-[11px] font-space text-zinc-400 font-light">Best pricing without online OTA markups</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-xs font-cinzel uppercase text-amber-400/90 tracking-[0.18em] font-semibold block">
                Fiber Gigabit Wi-Fi
              </span>
              <p className="text-[11px] font-space text-zinc-400 font-light">Seamless high-speed corporate connectivity</p>
            </div>
          </div>
        </InView>
      </div>

      {/* Room Full Details Modal */}
      {selectedRoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            className="relative max-w-2xl w-full luxury-glass-elevated bg-[#121216] rounded-3xl overflow-hidden p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedRoom(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-xl">
              <ProgressiveBlur
                src={selectedRoom.image}
                alt={selectedRoom.name}
                fill
                className="object-cover"
                wrapperClassName="w-full h-full"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div
                className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-cinzel uppercase tracking-[0.18em] backdrop-blur-md border font-semibold flex items-center space-x-1.5"
                style={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  borderColor: `${selectedRoom.floorColorHex}66`,
                  color: selectedRoom.floorColorHex,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: selectedRoom.floorColorHex }}
                />
                <span>{selectedRoom.floorTheme}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-3xl font-bold text-white">
                  {selectedRoom.name}
                </h3>
                <span className="font-space text-2xl font-bold text-[#d4af37]">
                  {selectedRoom.priceStarting}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {selectedRoom.description}
              </p>
            </div>

            {/* Specs Strip */}
            <div className="grid grid-cols-3 gap-3 py-3.5 border-y border-zinc-800 text-xs text-zinc-300">
              <div>
                <span className="text-[10px] uppercase font-cinzel tracking-[0.2em] text-[#d4af37] font-semibold block">Total Area</span>
                <span className="font-space font-semibold text-white tracking-wide">{selectedRoom.sqft}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-cinzel tracking-[0.2em] text-[#d4af37] font-semibold block">Bedding</span>
                <span className="font-space font-semibold text-white tracking-wide">{selectedRoom.bed}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-cinzel tracking-[0.2em] text-[#d4af37] font-semibold block">Occupancy</span>
                <span className="font-space font-semibold text-white tracking-wide">{selectedRoom.capacity}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase font-cinzel tracking-[0.2em] text-[#d4af37] font-semibold">
                Sanctuary Inclusions & Finishes
              </h4>
              <div className="grid grid-cols-2 gap-2.5 text-xs text-zinc-300 font-light">
                {selectedRoom.amenities.map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span className="font-space text-xs tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex justify-end space-y-0">
              <button
                onClick={() => {
                  const id = selectedRoom.id;
                  setSelectedRoom(null);
                  onOpenEnquiry(id, "room");
                }}
                className="w-full py-3.5 rounded-full bg-white text-black font-cinzel font-bold text-xs tracking-[0.16em] uppercase hover:bg-zinc-200 transition-all shadow-xl cursor-pointer"
              >
                Reserve {selectedRoom.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

