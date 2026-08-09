"use client";

import React, { Children, useState, useId } from "react";
import { AnimatePresence, motion, Transition } from "framer-motion";

export interface AnimatedBackgroundProps {
  children: React.ReactNode[];
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
}

export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className = "rounded-lg bg-zinc-800",
  transition = {
    type: "spring",
    bounce: 0.2,
    duration: 0.3,
  },
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultValue ?? null);
  const uniqueId = useId();

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);
    if (onValueChange) {
      onValueChange(id);
    }
  };

  return (
    <div
      className="relative flex flex-row items-center"
      onMouseLeave={() => enableHover && handleSetActiveId(null)}
    >
      {Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;
        const childProps = child.props as { "data-id"?: string };
        const id = childProps["data-id"] ?? String(index);
        const isActive = activeId === id;

        return (
          <div
            key={id}
            className="relative"
            onMouseEnter={() => enableHover && handleSetActiveId(id)}
            onClick={() => handleSetActiveId(id)}
          >
            <AnimatePresence>
              {isActive && (
                <motion.div
                  layoutId={`animated-bg-${uniqueId}`}
                  className={`absolute inset-0 z-0 ${className}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                />
              )}
            </AnimatePresence>
            <div className="relative z-10">{child}</div>
          </div>
        );
      })}
    </div>
  );
}
