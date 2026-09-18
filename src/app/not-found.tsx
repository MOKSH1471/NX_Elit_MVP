import React from "react";
import ErrorTemplate from "@/components/ui/ErrorTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Sanctuary Not Found | NX Elit",
  description: "The page or sanctuary you are seeking does not reside at this address.",
};

export default function NotFound() {
  return <ErrorTemplate statusCode="404" />;
}
