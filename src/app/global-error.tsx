"use client";

import React, { useEffect } from "react";
import ErrorTemplate from "@/components/ui/ErrorTemplate";
import "./globals.css";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global Layout Exception:", error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body className="bg-[#09090b] text-[#f4f3ef] font-sans antialiased">
        <ErrorTemplate
          statusCode="500"
          onRetry={reset}
          errorDetails={error?.digest || error?.message}
          showNavigation={false}
        />
      </body>
    </html>
  );
}
