"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REAL_PHOTOS } from "@/lib/data";

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isZooming, setIsZooming] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock scroll during intro
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Step 1: Hold initial view for 850ms, then begin elegant camera push-in
    const zoomTimer = setTimeout(() => {
      setIsZooming(true);
    }, 850);

    // Step 2: Complete and seamlessly remove splash screen after smooth glide
    const completeTimer = setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = originalOverflow;
      onComplete?.();
    }, 2650);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    document.body.style.overflow = "";
    onComplete?.();
  };

  if (isDone) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isZooming ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: {
              duration: isZooming ? 0.75 : 0.4,
              delay: isZooming ? 1.05 : 0,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
          className="fixed inset-0 z-50 bg-[#09090b] overflow-hidden flex items-center justify-center select-none cursor-pointer"
          onClick={handleSkip}
        >
          {/* Layer 0: Landing page photo with subtle cinematic counter-scale for 3D depth */}
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: isZooming ? 1.0 : 1.08 }}
            transition={{
              duration: 1.9,
              ease: [0.65, 0, 0.08, 1],
            }}
            className="absolute inset-0 z-0 pointer-events-none origin-center"
          >
            <img
              src={REAL_PHOTOS.heroExterior}
              alt="NX Elit Boutique Hotel Kolkata"
              className="w-full h-full object-cover brightness-[0.52] contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/15 to-black/55" />
          </motion.div>

          {/* Layer 1: Auto-Zooming SVG Cutout Mask (Pure Cutout without border) */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isZooming ? 28 : 1 }}
            transition={{
              duration: 1.8,
              ease: [0.72, 0, 0.12, 1], // Luxury accelerating push curve
            }}
            className="absolute inset-0 z-10 w-full h-full flex items-center justify-center origin-center will-change-transform pointer-events-none"
          >
            <svg
              className="w-full h-full min-w-[100vw] min-h-[100vh]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <mask id="splash-auto-knockout-mask" x="0" y="0" width="100%" height="100%">
                  {/* Opaque white maintains the solid black surround */}
                  <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" />

                  {/* Black text punches a clean transparent hole through the black screen */}
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#000000"
                    style={{
                      fontFamily: "var(--font-serif), 'Cormorant Garamond', Garamond, Georgia, serif",
                      fontWeight: 700,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontSize: "clamp(42px, 10vw, 155px)",
                    }}
                  >
                    NX ELIT
                  </text>
                </mask>
              </defs>

              {/* Solid black screen with cutout mask applied */}
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="#09090b"
                mask="url(#splash-auto-knockout-mask)"
              />
            </svg>
          </motion.div>

          {/* Layer 2: Intro Brand Header & Skip Button (fades gracefully when zoom begins) */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: isZooming ? 0 : 1, y: isZooming ? -12 : 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0 z-20 flex flex-col justify-between items-center py-10 px-6 pointer-events-none"
          >
            <div className="flex items-center space-x-2.5 text-[10px] sm:text-xs uppercase tracking-[0.32em] text-zinc-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              <span>Boutique Luxury · EM Bypass, Kolkata</span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSkip();
              }}
              className="pointer-events-auto text-[10px] uppercase tracking-[0.25em] text-zinc-400 hover:text-white px-5 py-2 rounded-full border border-zinc-800/80 hover:border-zinc-500 transition-all bg-black/60 backdrop-blur-md cursor-pointer shadow-lg"
            >
              Skip Intro
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
