"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Maximize2, ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/data";

export function CircularGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const rotateY = useMotionValue(0);
  const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 20 });

  const total = GALLERY_ITEMS.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
    rotateY.set(rotateY.get() - 360 / total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    rotateY.set(rotateY.get() + 360 / total);
  };

  return (
    <div className="relative py-16 bg-[#09090b] text-[#f4f3ef] overflow-hidden">
      {/* 3D Circular Viewport */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        <div className="relative w-full h-[420px] sm:h-[480px] flex items-center justify-center perspective-[1200px]">
          <motion.div
            style={{ rotateY: smoothRotateY }}
            className="relative w-full h-full flex items-center justify-center transform-style-3d transition-transform duration-500"
          >
            {GALLERY_ITEMS.map((item, index) => {
              const angle = (index / total) * 360;
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveIndex(index);
                    rotateY.set(-angle);
                  }}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(340px)`,
                  }}
                  className={`absolute w-64 sm:w-80 h-80 sm:h-96 rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer shadow-2xl ${
                    isActive
                      ? "border-[#d4af37] scale-105 opacity-100 z-20"
                      : "border-zinc-800 opacity-40 hover:opacity-75 hover:scale-100"
                  }`}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold block">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-base font-bold truncate">{item.title}</h4>
                    <p className="text-xs text-zinc-300 font-light truncate mt-0.5">{item.caption}</p>
                  </div>

                  {isActive && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPhoto(item);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/80 text-white hover:text-[#d4af37] border border-zinc-700"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Carousel Control Buttons */}
        <div className="flex items-center justify-center space-x-6 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 transition-colors shadow-md"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5 text-[#d4af37]" />
          </button>
          <div className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
            <span className="text-[#d4af37] font-semibold">{activeIndex + 1}</span> / {total}
          </div>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 transition-colors shadow-md"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-5 h-5 text-[#d4af37]" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl w-full bg-[#121216] rounded-2xl overflow-hidden border border-zinc-800 p-4 space-y-4">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-black/80 text-zinc-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative h-[65vh] w-full rounded-xl overflow-hidden">
              <Image src={selectedPhoto.imageUrl} alt={selectedPhoto.title} fill className="object-contain" />
            </div>
            <div className="px-4 pb-2">
              <h3 className="font-serif text-2xl font-bold text-white">{selectedPhoto.title}</h3>
              <p className="text-xs text-zinc-300 mt-1 font-light">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
