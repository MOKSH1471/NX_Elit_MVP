'use client';

import React, { useState } from 'react';
import { ExternalLink, Navigation2, Clock, Compass, Sparkles } from 'lucide-react';

export interface TransitStop {
  id: string;
  name: string;
  subname: string;
  time: string;
  distance: string;
  x: number;
  y: number;
  labelY: number;
  highlight: string;
  detail: string;
  mapsUrl: string;
  isSanctuary?: boolean;
}

const TRANSIT_STOPS: TransitStop[] = [
  {
    id: 'park-street',
    name: 'PARK STREET',
    subname: 'CBD & Heritage',
    time: '15 MIN',
    distance: '7 km',
    x: 90,
    y: 175,
    labelY: 130,
    highlight: 'Direct via Maa Flyover arterial link',
    detail: 'Kolkata’s premier dining, historic clubs, and central financial district.',
    mapsUrl: 'https://maps.google.com/?q=Park+Street+Kolkata',
  },
  {
    id: 'south-city',
    name: 'SOUTH CITY',
    subname: 'Jadavpur Arterial',
    time: '12 MIN',
    distance: '5.5 km',
    x: 250,
    y: 135,
    labelY: 90,
    highlight: 'Direct via Southern EM Bypass',
    detail: 'Southern promenade, upscale lifestyle hub, and Prince Anwar Shah corridor.',
    mapsUrl: 'https://maps.google.com/?q=South+City+Mall+Kolkata',
  },
  {
    id: 'science-city',
    name: 'SCIENCE CITY',
    subname: 'Convention Center',
    time: '5 MIN',
    distance: '1.5 km',
    x: 420,
    y: 145,
    labelY: 100,
    highlight: 'Immediate neighbor on EM Bypass',
    detail: 'India’s largest science convention hub, exhibition pavilions, and Milan Mela.',
    mapsUrl: 'https://maps.google.com/?q=Science+City+Kolkata',
  },
  {
    id: 'nx-elit',
    name: 'NX ELIT',
    subname: 'EM Bypass Sanctuary',
    time: '0 MIN',
    distance: 'Focal Point',
    x: 600,
    y: 150,
    labelY: 45,
    isSanctuary: true,
    highlight: 'Prime Arterial Gateway · EM Bypass',
    detail: 'Strategically positioned on EM Bypass with unimpeded access in every cardinal direction.',
    mapsUrl: 'https://maps.google.com/?q=22.5400,88.3985',
  },
  {
    id: 'sector-v',
    name: 'SECTOR V',
    subname: 'IT & Tech Hub',
    time: '10 MIN',
    distance: '5 km',
    x: 770,
    y: 120,
    labelY: 75,
    highlight: 'Direct North Bypass corridor',
    detail: 'Salt Lake tech city hosting multinational headquarters and tech enterprise parks.',
    mapsUrl: 'https://maps.google.com/?q=Sector+V+Salt+Lake+Kolkata',
  },
  {
    id: 'new-town',
    name: 'NEW TOWN',
    subname: 'Eco Park & Business',
    time: '18 MIN',
    distance: '9 km',
    x: 930,
    y: 115,
    labelY: 70,
    highlight: 'Biswa Bangla Expressway',
    detail: 'Global financial hub, modern convention centers, and Kolkata Gate.',
    mapsUrl: 'https://maps.google.com/?q=New+Town+Kolkata',
  },
  {
    id: 'airport',
    name: 'CCU AIRPORT',
    subname: 'Kolkata International',
    time: '25 MIN',
    distance: '12 km',
    x: 1090,
    y: 130,
    labelY: 85,
    highlight: 'Express VIP / Arterial link',
    detail: 'Direct arterial highway to CCU International Airport with 24/7 concierge transfers.',
    mapsUrl: 'https://maps.google.com/?q=Netaji+Subhash+Chandra+Bose+International+Airport+Kolkata',
  },
];

// Continuous organic bezier contour wave replicating the reference line art
const PATH_DATA =
  'M 30 195 ' +
  'C 60 188, 75 180, 90 175 ' +
  'C 140 160, 200 142, 250 135 ' +
  'C 290 128, 310 170, 350 165 ' +
  'C 380 160, 400 148, 420 145 ' +
  'C 480 140, 540 155, 600 150 ' +
  'C 660 145, 715 130, 770 120 ' +
  'C 810 112, 830 175, 850 215 ' +
  'C 870 248, 905 145, 930 115 ' +
  'C 970 85, 1030 124, 1090 130 ' +
  'C 1125 133, 1150 138, 1175 142';

export default function TransitLineMap() {
  const [activeStopId, setActiveStopId] = useState<string>('nx-elit');

  const activeStop =
    TRANSIT_STOPS.find((s) => s.id === activeStopId) || TRANSIT_STOPS[3];

  return (
    <div className="w-full bg-[#080d1a]/95 border border-zinc-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
      {/* Background Architectural Grid & Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top Bar: Subhead & Interactive Helper */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/70">
        <div>
          <span className="font-cinzel text-[10px] uppercase tracking-[0.26em] text-[#d4af37] font-semibold flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            Arterial Elevation & Transit Line
          </span>
          <p className="font-space text-xs text-zinc-400 mt-1">
            Hover or tap any stop along the EM Bypass corridor to inspect commute times.
          </p>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-space text-zinc-400 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/5">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
          <span>Focal Sanctuary: <strong className="text-white font-medium">NX Elit</strong></span>
        </div>
      </div>

      {/* Main Vector Transit Line Art Container */}
      <div className="relative z-10 my-8 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 scrollbar-none">
        <div className="min-w-[860px] lg:min-w-full">
          <svg
            viewBox="0 0 1200 270"
            className="w-full h-auto overflow-visible select-none"
            aria-label="NX Elit Transit Line Topology Diagram"
          >
            <defs>
              {/* Gradient for the flowing line */}
              <linearGradient id="transitLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4af37" stopOpacity="0.4" />
                <stop offset="25%" stopColor="#e6ca65" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="75%" stopColor="#e6ca65" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#d4af37" stopOpacity="0.4" />
              </linearGradient>

              {/* Gold glow filter */}
              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Ambient Ambient Wave Halo */}
            <path
              d={PATH_DATA}
              fill="none"
              stroke="#d4af37"
              strokeWidth="6"
              strokeOpacity="0.12"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none"
            />

            {/* The Main High-End Organic Transit Curve */}
            <path
              d={PATH_DATA}
              fill="none"
              stroke="url(#transitLineGrad)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Center NX Elit Luxury Emblem (Matching Reference Image) */}
            <g
              transform="translate(600, 92)"
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setActiveStopId('nx-elit')}
            >
              {/* Four-Petal Luxury Crest */}
              <path
                d="M 0,-22 C 5,-9 9,-5 22,0 C 9,5 5,9 0,22 C -5,9 -9,5 -22,0 C -9,-5 -5,-9 0,-22 Z"
                fill="#121727"
                stroke="#d4af37"
                strokeWidth="1.6"
              />
              <circle cx="0" cy="0" r="3.5" fill="#f4f3ef" />
              <circle
                cx="0"
                cy="0"
                r="9"
                fill="none"
                stroke="#d4af37"
                strokeWidth="0.8"
                strokeDasharray="1.5 2.5"
                opacity="0.8"
              />
              {/* Petal corner accents */}
              <circle cx="-10" cy="-10" r="1" fill="#d4af37" />
              <circle cx="10" cy="-10" r="1" fill="#d4af37" />
              <circle cx="10" cy="10" r="1" fill="#d4af37" />
              <circle cx="-10" cy="10" r="1" fill="#d4af37" />
            </g>

            {/* Render Each Transit Stop Node & Label */}
            {TRANSIT_STOPS.map((stop) => {
              const isSelected = activeStopId === stop.id;
              const isSanctuary = stop.isSanctuary;

              return (
                <g
                  key={stop.id}
                  className="cursor-pointer group"
                  onClick={() => setActiveStopId(stop.id)}
                  onMouseEnter={() => setActiveStopId(stop.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${stop.name}, ${stop.time}`}
                >
                  {/* Invisible enlarged hit-target for effortless clicking */}
                  <rect
                    x={stop.x - 45}
                    y={stop.labelY - 15}
                    width={90}
                    height={stop.y - stop.labelY + 30}
                    fill="transparent"
                  />

                  {/* Text Labels Above Point */}
                  <g>
                    <text
                      x={stop.x}
                      y={stop.labelY - 6}
                      textAnchor="middle"
                      className={`font-cinzel text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-200 ${
                        isSelected
                          ? 'fill-[#ffffff]'
                          : isSanctuary
                          ? 'fill-[#f4f3ef]'
                          : 'fill-zinc-300 group-hover:fill-white'
                      }`}
                    >
                      {stop.name}
                    </text>
                    <text
                      x={stop.x}
                      y={stop.labelY + 8}
                      textAnchor="middle"
                      className={`font-space text-[9.5px] tracking-wider transition-colors duration-200 ${
                        isSelected
                          ? 'fill-[#d4af37] font-semibold'
                          : isSanctuary
                          ? 'fill-[#d4af37]'
                          : 'fill-zinc-500 group-hover:fill-zinc-300'
                      }`}
                    >
                      {stop.time}
                    </text>
                  </g>

                  {/* Vertical Connector Line (Subtle) */}
                  <line
                    x1={stop.x}
                    y1={stop.labelY + 16}
                    x2={stop.x}
                    y2={stop.y - (isSanctuary ? 8 : 6)}
                    stroke={isSelected ? '#d4af37' : '#3f3f46'}
                    strokeWidth={isSelected ? 1.2 : 0.8}
                    strokeDasharray={isSelected ? 'none' : '2 2'}
                    opacity={isSelected ? 0.9 : 0.4}
                  />

                  {/* Node Dot on the Curve */}
                  <g transform={`translate(${stop.x}, ${stop.y})`}>
                    {/* Active Halo Ping */}
                    {isSelected && (
                      <circle
                        cx="0"
                        cy="0"
                        r="11"
                        fill="none"
                        stroke="#d4af37"
                        strokeWidth="1.2"
                        className="animate-ping opacity-75"
                      />
                    )}

                    {/* Outer Ring */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSanctuary ? 7 : isSelected ? 6 : 4.5}
                      fill={isSelected ? '#d4af37' : '#080d1a'}
                      stroke={isSelected ? '#ffffff' : isSanctuary ? '#d4af37' : '#a1a1aa'}
                      strokeWidth={isSelected ? 2 : 1.5}
                      className="transition-all duration-200 group-hover:scale-125"
                    />

                    {/* Core Dot */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSanctuary ? 3.5 : 2}
                      fill={isSelected ? '#080d1a' : isSanctuary ? '#ffffff' : '#f4f3ef'}
                    />
                  </g>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Selected Stop Details Highlight Card */}
      <div className="relative z-10 mt-6 bg-[#0f1524] border border-zinc-800 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="font-cinzel text-base sm:text-lg font-bold text-white tracking-wide">
              {activeStop.name}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-cinzel font-semibold tracking-wider uppercase">
              {activeStop.time} · {activeStop.distance}
            </span>
            {activeStop.isSanctuary && (
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-space font-medium">
                Hotel Coordinates
              </span>
            )}
          </div>
          <p className="font-space text-xs text-zinc-300 font-light leading-relaxed">
            {activeStop.detail}
          </p>
          <div className="flex items-center gap-2 pt-1 text-[11px] font-space text-amber-300/80">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{activeStop.highlight}</span>
          </div>
        </div>

        {/* Action Link to Google Maps */}
        <div className="shrink-0">
          <a
            href={activeStop.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-cinzel font-bold text-[10px] uppercase tracking-[0.16em] hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer"
          >
            <span>Open Directions</span>
            <ExternalLink className="w-3.5 h-3.5 text-black" />
          </a>
        </div>
      </div>
    </div>
  );
}
