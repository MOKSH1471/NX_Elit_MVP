"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import LocationSection from "@/components/sections/LocationSection";
import EnquiryDrawer from "@/components/ui/EnquiryDrawer";

export default function ContactPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>();
  const [enquiryType, setEnquiryType] = useState<'room' | 'banquet'>('room');

  const handleOpenEnquiry = (roomId?: string, type: 'room' | 'banquet' = 'room') => {
    setSelectedRoomId(roomId);
    setEnquiryType(type);
    setDrawerOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f3ef] pt-16">
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center space-y-4">
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Contact & Location
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-light">
          NX Elit Boutique Hotel, EM Bypass Corridor, Kolkata. Directly reach out for reservations, event bookings, and concierge assistance.
        </p>
      </div>

      <ContactSection />
      <LocationSection />

      <Footer onOpenEnquiry={handleOpenEnquiry} />

      <EnquiryDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        preselectedRoomId={selectedRoomId}
        preselectedType={enquiryType}
      />
    </main>
  );
}
