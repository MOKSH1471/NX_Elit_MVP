"use client";

import React from "react";
import { ScrollVelocity } from "@/components/reactbits/ScrollVelocity";

export default function ScrollVelocityTicker() {
  return (
    <div className="w-full">
      <ScrollVelocity
        text="EM BYPASS · KOLKATA · BOUTIQUE LUXURY HOTEL · STUDIO ARDEN INTERIORS · 28 RESIDENCES · THE ELITE LOUNGE · "
        baseVelocity={1.5}
      />
    </div>
  );
}
