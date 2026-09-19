'use client';

import React from 'react';
import { InfiniteScroll } from '@/components/reactbits/InfiniteScroll';
import { Sparkles, Shield, Award, Utensils, Star, Compass } from 'lucide-react';
import { useScrollJourney } from '@/lib/scroll/ScrollProvider';

export default function PressMarquee() {
  const { velocity } = useScrollJourney();

  const marqueeItems = [
    <div key="m1" className="flex items-center space-x-3 text-xs text-zinc-300 font-light">
      <Star className="w-4 h-4 text-white" />
      <span>&ldquo;Designer Boutique Sanctuary on EM Bypass&rdquo; — Hospitality Review</span>
    </div>,
    <div key="m2" className="flex items-center space-x-3 text-xs text-zinc-300 font-light">
      <Sparkles className="w-4 h-4 text-white" />
      <span>Vinoo Chadha Signature Interiors</span>
    </div>,
    <div key="m3" className="flex items-center space-x-3 text-xs text-zinc-300 font-light">
      <Utensils className="w-4 h-4 text-white" />
      <span>NX Kitchen Lounge & Fine Dining</span>
    </div>,
    <div key="m4" className="flex items-center space-x-3 text-xs text-zinc-300 font-light">
      <Shield className="w-4 h-4 text-white" />
      <span>Direct Reservation Best Rate Guarantee</span>
    </div>,
    <div key="m5" className="flex items-center space-x-3 text-xs text-zinc-300 font-light">
      <Compass className="w-4 h-4 text-white" />
      <span>12 km to CCU International Airport</span>
    </div>,
    <div key="m6" className="flex items-center space-x-3 text-xs text-zinc-300 font-light">
      <Award className="w-4 h-4 text-white" />
      <span>Colour-Coded Guest Floors (Blue, Green, Red)</span>
    </div>,
  ];

  return <InfiniteScroll items={marqueeItems} velocity={velocity} baseSpeed={1} />;
}
