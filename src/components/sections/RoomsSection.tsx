"use client";

import React, { useState } from "react";
import { Maximize2, BedDouble, Users, Check, ArrowRight, Info, X } from "lucide-react";
import { ROOM_CATEGORIES, RoomCategory } from "@/lib/data";
import { InView } from "@/components/core/in-view";
import { AnimatedGroup } from "@/components/core/animated-group";
import { FlyingPosters } from "@/components/reactbits/FlyingPosters";
import { GlareHover } from "@/components/reactbits/GlareHover";
import { ProgressiveBlur } from "@/components/core/progressive-blur";

interface RoomsSectionProps {
  onOpenEnquiry: (roomId?: string, type?: 'room' | 'banquet') => void;
}

export default function RoomsSection({ onOpenEnquiry }: RoomsSectionProps) {
  const [selectedRoom, setSelectedRoom] = useState<RoomCategory | null>(null);

  const flagshipSuite = ROOM_CATEGORIES.find((r) => r.id === "elit-suite") || ROOM_CATEGORIES[3];
  const otherCategories = ROOM_CATEGORIES.filter((r) => r.id !== "elit-suite");

  return (
    <section id="rooms" className="py-24 bg-[#09090b] text-[#f4f3ef] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <InView className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Accommodations & Suites
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#f4f3ef]">
            Designed for Rest & Quiet Elegance
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-xl mx-auto">
            28 residences across Executive Deluxe, Deluxe, Super Deluxe, and Suite categories — each configured with Vinoo Chadha's signature dark mood lighting and custom acoustics.
          </p>
        </InView>

        {/* Flagship Suite Featured Hero Banner */}
        <InView transition={{ delay: 0.1, duration: 0.5 }}>
          <FlyingPosters>
            <div className="bg-[#121216] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center group">
              <div className="lg:col-span-7 relative h-72 sm:h-96 w-full overflow-hidden">
                <ProgressiveBlur
                  src={flagshipSuite.image}
                  alt={flagshipSuite.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  wrapperClassName="w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute top-4 left-4 bg-rose-950/90 border border-rose-500/40 text-rose-300 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-semibold">
                  Flagship Residence · 5th Floor Ruby Red
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                    {flagshipSuite.sqft} · {flagshipSuite.capacity}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white mt-1">
                    {flagshipSuite.name}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-2 font-light">
                    {flagshipSuite.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 pt-2 border-t border-zinc-800 font-light">
                  {flagshipSuite.amenities.slice(0, 4).map((a) => (
                    <div key={a} className="flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-400 block">Direct Rate</span>
                    <span className="font-serif text-2xl font-bold text-white">{flagshipSuite.priceStarting}</span>
                  </div>
                  <GlareHover
                    onClick={() => onOpenEnquiry(flagshipSuite.id, 'room')}
                    className="px-5 py-2.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors"
                  >
                    Enquire Suite
                  </GlareHover>
                </div>
              </div>
            </div>
          </FlyingPosters>
        </InView>

        {/* 3 Categories Grid Below */}
        <AnimatedGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherCategories.map((room) => (
            <FlyingPosters key={room.id}>
              <div className="bg-[#121216] border border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between group shadow-xl h-full">
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <ProgressiveBlur
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    wrapperClassName="w-full h-full"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-zinc-200 border border-zinc-700">
                    {room.floorTheme}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-zinc-800 text-xs text-white font-semibold">
                    {room.priceStarting}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed font-light">
                      {room.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 py-2 px-3 bg-[#18181f] rounded-xl border border-zinc-800/80 text-[11px] text-zinc-300">
                    <div className="flex items-center space-x-1">
                      <Maximize2 className="w-3 h-3 text-white" />
                      <span>{room.sqft}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BedDouble className="w-3 h-3 text-white" />
                      <span className="truncate">{room.bed}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-white" />
                      <span>{room.capacity.split(' ')[0]} {room.capacity.split(' ')[1]}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 flex items-center space-x-2">
                    <GlareHover
                      onClick={() => onOpenEnquiry(room.id, 'room')}
                      className="flex-1 py-2.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center space-x-1.5"
                    >
                      <span className="flex items-center justify-center space-x-1">
                        <span>Enquire</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </GlareHover>
                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="p-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                      title="View Room Specs"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </FlyingPosters>
          ))}
        </AnimatedGroup>
      </div>

      {/* Lightbox Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#121216] border border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 text-[#f4f3ef]">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <ProgressiveBlur src={selectedRoom.image} alt={selectedRoom.name} fill className="object-cover" wrapperClassName="w-full h-full" />
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/80 text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-zinc-400">
                {selectedRoom.floorTheme}
              </span>
              <h3 className="font-serif text-3xl font-bold text-white mt-1">
                {selectedRoom.name}
              </h3>
              <p className="text-xs text-zinc-300 mt-2 leading-relaxed font-light">{selectedRoom.description}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Included Room Amenities</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 font-light">
                {selectedRoom.amenities.map((a) => (
                  <div key={a} className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-400 block">Starting Rate</span>
                <span className="font-serif text-2xl font-bold text-white">{selectedRoom.priceStarting}</span>
              </div>
              <GlareHover
                onClick={() => {
                  const rId = selectedRoom.id;
                  setSelectedRoom(null);
                  onOpenEnquiry(rId, 'room');
                }}
                className="px-6 py-3 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-zinc-200"
              >
                Proceed to Enquiry
              </GlareHover>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
