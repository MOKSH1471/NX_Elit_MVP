"use client";

import React from "react";
import { motion } from "framer-motion";

interface InfiniteScrollProps {
  items: React.ReactNode[];
  speed?: number;
  className?: string;
}

export function InfiniteScroll({ items, speed = 25, className = "" }: InfiniteScrollProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap relative py-4 bg-[#09090b] border-y border-zinc-800/60 ${className}`}>
      <motion.div
        className="inline-flex space-x-12 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {items.concat(items).map((item, idx) => (
          <div key={idx} className="inline-block">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
