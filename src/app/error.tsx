"use client";

import React, { useEffect } from "react";
import ErrorTemplate from "@/components/ui/ErrorTemplate";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log unexpected runtime errors for diagnostic tracking
    console.error("The Elite Hotel Runtime Exception:", error);
  }, [error]);

  return (
    <ErrorTemplate
      statusCode="500"
      onRetry={reset}
      errorDetails={error?.digest || error?.message}
    />
  );
}
