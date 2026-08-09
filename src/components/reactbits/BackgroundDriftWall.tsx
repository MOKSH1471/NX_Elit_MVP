"use client";

import React from "react";
import DriftWall from "./DriftWall";
import { GALLERY_ITEMS } from "@/lib/data";

export function BackgroundDriftWall() {
  const driftItems = GALLERY_ITEMS.map((item) => ({
    image: item.imageUrl,
    title: item.title,
  }));

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60 min-h-[800px]"
      style={{ contain: "strict" }}
    >
      <DriftWall
        items={driftItems}
        columns={4}
        tileWidth={300}
        tileHeight={180}
        gap={24}
        tilt={10}
        turn={-8}
        perspective={1400}
        depth={80}
        speed={26}
        direction="up"
        variance={0.35}
        parallax={0}
        pauseOnHover={false}
        lift={0}
        fade={0.3}
        dim={0.75}
        overlayColor="#09090b"
        useCSSAnimation={true}
        className="pointer-events-none w-full h-full"
      />
      {/* Soft Vignette Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-black/40 to-[#09090b] pointer-events-none" />
    </div>
  );
}
