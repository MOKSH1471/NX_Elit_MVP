"use client";

import React from "react";
import { ScrollVelocity } from "@/components/reactbits/ScrollVelocity";

export default function ScrollVelocityTicker() {
  return (
    <div className="w-full">
      <ScrollVelocity
        text="EM BYPASS · KOLKATA · BOUTIQUE HOTEL · VINOO CHADHA INTERIORS · 28 ROOMS · NX KITCHEN LOUNGE · "
        baseVelocity={1.5}
      />
    </div>
  );
}
