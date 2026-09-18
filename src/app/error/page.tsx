"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ErrorTemplate, { ERROR_DEFINITIONS } from "@/components/ui/ErrorTemplate";

function ErrorPreviewContent() {
  const searchParams = useSearchParams();
  const initialCode = searchParams.get("code") || "404";
  const [selectedCode, setSelectedCode] = useState<string>(initialCode);

  const errorCodes = Object.keys(ERROR_DEFINITIONS);

  return (
    <div className="relative">
      {/* Interactive Code Switcher Bar */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-zinc-950/90 border border-zinc-700/80 p-1.5 rounded-full backdrop-blur-md shadow-2xl flex items-center space-x-1 max-w-[95vw] overflow-x-auto">
        <span className="text-[10px] font-mono uppercase text-zinc-500 px-3 hidden sm:inline">
          Preview Error:
        </span>
        {errorCodes.map((code) => (
          <button
            key={code}
            onClick={() => setSelectedCode(code)}
            className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all cursor-pointer shrink-0 ${
              selectedCode === code
                ? "bg-white text-black shadow-md scale-105"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {code}
          </button>
        ))}
      </div>

      {/* Render Error Page */}
      <ErrorTemplate
        statusCode={selectedCode}
        onRetry={
          selectedCode === "500" || selectedCode === "408"
            ? () => alert("Simulated retry action executed.")
            : undefined
        }
      />
    </div>
  );
}

export default function ErrorPagePreview() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-zinc-400 font-mono text-xs">
          Loading sanctuary error state...
        </div>
      }
    >
      <ErrorPreviewContent />
    </Suspense>
  );
}
