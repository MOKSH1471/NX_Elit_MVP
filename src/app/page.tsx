"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import ScrollVelocityTicker from "@/components/sections/ScrollVelocityTicker";
import RoomsSection from "@/components/sections/RoomsSection";
import PressMarquee from "@/components/sections/PressMarquee";
import DiningSection from "@/components/sections/DiningSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import LocationSection from "@/components/sections/LocationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import EnquiryDrawer from "@/components/ui/EnquiryDrawer";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>();
  const [enquiryType, setEnquiryType] = useState<'room' | 'banquet'>('room');

  const handleOpenEnquiry = (roomId?: string, type: 'room' | 'banquet' = 'room') => {
    setSelectedRoomId(roomId);
    setEnquiryType(type);
    setDrawerOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f3ef] selection:bg-white selection:text-black">
      {/* Sticky Header Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Hero Section */}
      <HeroSection onOpenEnquiry={handleOpenEnquiry} />

      {/* Story & Colour Floor Strip Section with Background DriftWall Show */}
      <StorySection onOpenEnquiry={handleOpenEnquiry} />

      {/* Scroll Velocity Ticker Strip */}
      <ScrollVelocityTicker />

      {/* Room Categories Section */}
      <RoomsSection onOpenEnquiry={handleOpenEnquiry} />

      {/* Press & Amenities Marquee */}
      <PressMarquee />

      {/* NX Kitchen Dining Showcase */}
      <DiningSection onOpenEnquiry={handleOpenEnquiry} />

      {/* Amenities & Banquet Space */}
      <ExperienceSection onOpenEnquiry={handleOpenEnquiry} />

      {/* Customer Reviews & DepthCarousel */}
      <ReviewsSection />

      {/* EM Bypass Location & Connectivity */}
      <LocationSection />

      {/* Contact & Direct Enquiry Form */}
      <ContactSection />

      {/* Global Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

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
