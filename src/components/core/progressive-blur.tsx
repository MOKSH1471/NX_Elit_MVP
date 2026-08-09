"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ProgressiveBlurProps extends ImageProps {
  className?: string;
  wrapperClassName?: string;
}

export function ProgressiveBlur({ className = "", wrapperClassName = "", alt, ...props }: ProgressiveBlurProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      <Image
        {...props}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`transition-all duration-700 ease-out ${
          loaded ? "blur-0 scale-100 opacity-100" : "blur-md scale-105 opacity-40"
        } ${className}`}
      />
    </div>
  );
}
