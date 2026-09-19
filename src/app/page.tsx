"use client";

import React, { useState, useEffect } from "react";
import SplashScreen from "@/components/ui/SplashScreen";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import PressMarquee from "@/components/sections/PressMarquee";
import DiningSection from "@/components/sections/DiningSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import AddressSection from "@/components/sections/AddressSection";
import Footer from "@/components/layout/Footer";
import EnquiryDrawer from "@/components/ui/EnquiryDrawer";
import FloatingBookingBar from "@/components/ui/FloatingBookingBar";

export default function Home() {
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
    <main className="min-h-screen bg-[#09090b] text-[#f4f3ef] pb-28 selection:bg-white selection:text-black">
      {/* Independent Auto-Zoom Splash Introduction Screen */}
      <SplashScreen />

      {/* Hero Section */}
      <HeroSection onOpenEnquiry={handleOpenEnquiry} />

      {/* Story & Colour Floor Identity Section (Ends on 4th Picture / Level 05 Crown) */}
      <StorySection onOpenEnquiry={handleOpenEnquiry} />

      {/* NX Kitchen Dining Showcase (Red Lounge arc sweeps in immediately after 4th picture) */}
      <DiningSection onOpenEnquiry={handleOpenEnquiry} />

      {/* Press & Amenities Marquee */}
      <PressMarquee />

      {/* Amenities & Banquet Space */}
      <ExperienceSection onOpenEnquiry={handleOpenEnquiry} />

      {/* Customer Reviews & DepthCarousel */}
      <ReviewsSection />

      {/* Address, Location & Direct Reception Scene (Bevel Wipe over Map) */}
      <AddressSection />

      {/* Global Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Floating Quick Reservation Bar (Appears on Scroll) */}
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
