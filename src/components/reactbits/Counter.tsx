"use client";

import React, { useEffect, useState } from "react";
import { useSpring, useTransform } from "framer-motion";

interface CounterProps {
  value: number;
  className?: string;
  duration?: number;
}

export function Counter({ value, className = "", duration = 1500 }: CounterProps) {
  const spring = useSpring(0, {
    stiffness: 90,
    damping: 25,
    duration: duration / 1000,
  });

  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());
  const [currentValue, setCurrentValue] = useState("0");

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    return display.on("change", (latest) => {
      setCurrentValue(latest);
    });
  }, [display]);

  return <span className={className}>{currentValue}</span>;
}
