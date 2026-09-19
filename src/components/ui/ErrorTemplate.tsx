"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, RefreshCw, Home, BedDouble, PhoneCall, Compass, ShieldAlert } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { HOTEL_INFO } from "@/lib/data";

export type ErrorCode = "404" | "500" | "403" | "408" | "503" | string;

export interface ErrorConfig {
  code: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  glowColor: string;
  badgeColor: string;
}

export const ERROR_DEFINITIONS: Record<string, ErrorConfig> = {
  "404": {
    code: "404",
    eyebrow: "404 // SANCTUARY NOT FOUND",
    title: "Lost Along the Corridor",
    subtitle: "The address you requested does not exist or has shifted.",
    description:
      "The sanctuary you are looking for has either been relocated, renamed, or dissolved into the moody shadows of the EM Bypass corridor.",
    glowColor: "rgba(212, 175, 55, 0.12)",
    badgeColor: "text-amber-400/90",
  },
  "500": {
    code: "500",
    eyebrow: "500 // CONCIERGE SYSTEM INTERRUPTION",
    title: "An Unforeseen Disruption",
    subtitle: "Our reservation server encountered an internal exception.",
    description:
      "A momentary fault occurred within our digital host systems. Our technical stewards have been dispatched to restore tranquility.",
    glowColor: "rgba(225, 29, 72, 0.14)",
    badgeColor: "text-rose-400/90",
  },
  "403": {
    code: "403",
    eyebrow: "403 // PRIVATE SANCTUARY RESERVED",
    title: "Restricted Access",
    subtitle: "Clearance required to enter this floor.",
    description:
      "This private suite or administration wing is reserved for authorized hosts. Please present your credentials to the reception desk.",
    glowColor: "rgba(59, 130, 246, 0.14)",
    badgeColor: "text-blue-400/90",
  },
  "408": {
    code: "408",
    eyebrow: "408 // REQUEST TIMEOUT",
    title: "Connection Faded",
    subtitle: "The digital desk took too long to respond.",
    description:
      "The transmission was delayed across the network. Please verify your connection and signal our concierge desk again.",
    glowColor: "rgba(245, 158, 11, 0.12)",
    badgeColor: "text-amber-400/90",
  },
  "503": {
    code: "503",
    eyebrow: "503 // SANCTUARY MAINTENANCE",
    title: "Temporary Maintenance",
    subtitle: "Our systems are undergoing scheduled refinement.",
    description:
      "We are currently polishing our digital suites to ensure optimal performance. Normal service will resume momentarily.",
    glowColor: "rgba(16, 185, 129, 0.12)",
    badgeColor: "text-emerald-400/90",
  },
};

interface ErrorTemplateProps {
  statusCode?: ErrorCode;
  onRetry?: () => void;
  errorDetails?: string;
  showNavigation?: boolean;
}

export default function ErrorTemplate({
  statusCode = "404",
  onRetry,
  errorDetails,
  showNavigation = true,
}: ErrorTemplateProps) {
  const config = ERROR_DEFINITIONS[statusCode] || {
    code: statusCode,
    eyebrow: `${statusCode} // UNEXPECTED OCCURRENCE`,
    title: "Corridor Irregularity",
    subtitle: "An unidentified state was encountered.",
    description: "An atypical event disrupted your journey through NX Elit. Our concierge is available to assist.",
    glowColor: "rgba(212, 175, 55, 0.12)",
    badgeColor: "text-amber-400/90",
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f3ef] flex flex-col justify-between relative overflow-hidden selection:bg-white selection:text-black">
      {/* Atmospheric Background Elements */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: config.glowColor }}
      />

      {/* Gigantic Ghosted Watermark Numeral */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none -z-0 opacity-[0.035]">
        <span className="font-serif text-[28vw] font-bold text-white leading-none tracking-tighter">
          {config.code}
        </span>
      </div>

      {/* Central Error Content Canvas */}
      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8 my-auto py-24 sm:py-32">
        {/* Unboxed Monospaced Eyebrow Tag */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`text-[11px] sm:text-xs font-mono font-medium tracking-[0.25em] uppercase block ${config.badgeColor}`}
        >
          {config.eyebrow}
        </motion.span>

        {/* Serif Headline & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            {config.title}
          </h1>

          <p className="font-serif text-lg sm:text-2xl font-light text-zinc-300 italic max-w-xl mx-auto leading-relaxed">
            &ldquo;{config.subtitle}&rdquo;
          </p>
        </motion.div>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm text-zinc-400 font-light max-w-lg mx-auto leading-relaxed"
        >
          {config.description}
        </motion.p>

        {/* Optional Error Digest / Details for Technical Exceptions */}
        {errorDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-3 bg-zinc-950/80 border border-zinc-800 rounded-xl text-[11px] font-mono text-zinc-500 max-w-md mx-auto truncate"
          >
            Digest: {errorDetails}
          </motion.div>
        )}

        {/* Curated Navigation Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          {onRetry ? (
            <button
              onClick={onRetry}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold text-xs tracking-wider uppercase transition-all shadow-xl hover:scale-105 cursor-pointer flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Sanctuary</span>
            </button>
          ) : (
            <Link
              href="/"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-black hover:bg-zinc-200 font-semibold text-xs tracking-wider uppercase transition-all shadow-xl hover:scale-105 cursor-pointer flex items-center justify-center space-x-2"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return to Lobby</span>
            </Link>
          )}

          <Link
            href="/rooms"
            className="w-full sm:w-auto px-7 py-3 rounded-full border border-zinc-700 hover:border-white text-zinc-300 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer flex items-center justify-center space-x-2"
          >
            <BedDouble className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>View Residences</span>
          </Link>

          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="w-full sm:w-auto px-7 py-3 rounded-full border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white font-mono text-xs tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            <PhoneCall className="w-3.5 h-3.5 text-zinc-400" />
            <span>Call Concierge</span>
          </a>
        </motion.div>
      </main>

      {/* Bottom Subtle Brand Footer */}
      {showNavigation ? (
        <Footer onOpenEnquiry={() => {}} />
      ) : (
        <footer className="py-8 text-center text-xs font-mono text-zinc-600 border-t border-zinc-900">
          <span>NX ELIT · BOUTIQUE 4-STAR LUXURY · EM BYPASS KOLKATA</span>
        </footer>
      )}
    </div>
  );
}
