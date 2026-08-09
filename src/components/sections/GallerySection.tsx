"use client";

import React from "react";
import { InView } from "@/components/core/in-view";
import DriftWall from "@/components/reactbits/DriftWall";
import { GALLERY_ITEMS } from "@/lib/data";

export default function GallerySection() {
  const driftItems = GALLERY_ITEMS.map((item) => ({
    image: item.imageUrl,
    title: item.title,
  }));

  return (
    <section id="gallery" className="py-24 bg-[#09090b] text-[#f4f3ef] relative border-t border-b border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <InView className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            Visual Exploration
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            The Property Gallery
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-xl mx-auto">
            Interact with our 3D drifting wall showcasing guest residences, NX Kitchen lounge & dining, and banquet venue.
          </p>
        </InView>

        {/* DriftWall Component */}
        <InView transition={{ delay: 0.1, duration: 0.5 }}>
          <div className="w-full h-[550px] sm:h-[620px] rounded-3xl overflow-hidden border border-zinc-800 bg-[#09090b] shadow-2xl">
            <DriftWall
              items={driftItems}
              columns={5}
              tileWidth={230}
              tileHeight={150}
              gap={18}
              tilt={16}
              turn={-14}
              perspective={1200}
              depth={120}
              speed={38}
              direction="up"
              variance={0.45}
              parallax={0.6}
              lift={64}
              fade={0.6}
              dim={0.6}
              overlayColor="#09090b"
            />
          </div>
        </InView>
      </div>
    </section>
  );
}
