"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RoomsSection from "@/components/sections/RoomsSection";
import EnquiryDrawer from "@/components/ui/EnquiryDrawer";
import FloatingBookingBar from "@/components/ui/FloatingBookingBar";

export default function RoomsPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>();
  const [enquiryType, setEnquiryType] = useState<'room' | 'banquet'>('room');

  const handleOpenEnquiry = (roomId?: string, type: 'room' | 'banquet' = 'room') => {
    setSelectedRoomId(roomId);
    setEnquiryType(type);
    setDrawerOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f3ef] pt-16 sm:pt-20 pb-24 selection:bg-white selection:text-black">
      {/* Header Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Residences & Suites Section */}
      <div>
        <RoomsSection onOpenEnquiry={handleOpenEnquiry} />
      </div>

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Persistent Quick Booking Bar */}
      <FloatingBookingBar onOpenEnquiry={handleOpenEnquiry} />

      {/* Direct Booking & Event Enquiry Slide-Over Drawer */}
      <EnquiryDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        preselectedRoomId={selectedRoomId}
        preselectedType={enquiryType}
      />
    </main>
  );
}
