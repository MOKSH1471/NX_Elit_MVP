"use client";

import React, { useState } from "react";

interface GlareHoverProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function GlareHover({
  children,
  className = "",
  onClick,
  type = "button",
}: GlareHoverProps) {
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlarePosition({ x, y, opacity: 0.35 });
  };

  const handleMouseLeave = () => {
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Glare Overlay Sweep */}
      <span
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-inherit"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle 80px at ${glarePosition.x}px ${glarePosition.y}px, rgba(255, 255, 255, 0.6), transparent 80%)`,
        }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
