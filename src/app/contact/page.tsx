"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/layout/Footer";
import AddressSection from "@/components/sections/AddressSection";
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

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ roomId?: string; type?: 'room' | 'banquet' }>;
      handleOpenEnquiry(customEvent.detail?.roomId, customEvent.detail?.type || 'room');
    };
    window.addEventListener('open-enquiry', handler);
    return () => window.removeEventListener('open-enquiry', handler);
  }, []);

  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f3ef] pt-16">
      <AddressSection />

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
