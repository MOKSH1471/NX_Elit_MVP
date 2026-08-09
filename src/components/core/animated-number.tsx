"use client";

import React, { useEffect, useState } from "react";
import { useSpring, useTransform } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  className?: string;
  springOptions?: {
    bounce?: number;
    duration?: number;
  };
}

export function AnimatedNumber({
  value,
  className = "",
  springOptions = { bounce: 0, duration: 1500 },
}: AnimatedNumberProps) {
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: (springOptions.duration || 1500) / 1000,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

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
