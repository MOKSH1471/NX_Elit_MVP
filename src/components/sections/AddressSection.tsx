'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { HOTEL_INFO, ROOM_CATEGORIES } from '@/lib/data';
import { BevelPanel } from '@/components/primitives/BevelPanel';
import { SocialLinks } from '@/components/ui/SocialIcons';
import TransitLineMap from './TransitLineMap';

export default function AddressSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomCategory: 'executive-deluxe',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="address" className="relative bg-[#0b1733] text-[#f4f3ef] overflow-hidden">
      {/* 1. Location Header & Minimalist Transit Line Architecture */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-16 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-cinzel text-xs uppercase tracking-[0.28em] text-[#d4af37] font-semibold block">
            Prime Address // EM BYPASS, KOLKATA
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Connectivity & Reception
          </h2>
          <p className="font-space text-sm sm:text-base text-zinc-300 font-light max-w-lg mx-auto">
            Direct high-speed arterial connections across Kolkata’s airport, tech hubs, and cultural quarters.
          </p>
        </div>

        {/* Elegant Continuous Line-Style Transit Map (Era Residence Model) */}
        <TransitLineMap />
      </div>

      {/* 2. BevelPanel Rising for Concierge Reception & Direct Reservation */}
      <div className="relative w-full">
        <BevelPanel tint="#09090b">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Direct Reception Info */}
              <div className="lg:col-span-5 bg-[#121216] border border-zinc-800 p-8 rounded-3xl space-y-6 shadow-2xl">
                <div>
                  <span className="font-cinzel text-[10px] uppercase tracking-[0.24em] text-[#d4af37] font-semibold block">
                    Concierge Desk
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white mt-1">
                    Front Desk & Transfers
                  </h3>
                  <p className="font-space text-xs text-zinc-400 mt-2 font-light">
                    24/7 assistance for room reservations, airport transfers, and private event bookings.
                  </p>
                </div>

                <div className="space-y-3 font-space text-xs">
                  <a
                    href={`tel:${HOTEL_INFO.phone}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#18181f] border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <div>
                      <span className="text-zinc-400 block text-[10px] uppercase font-cinzel tracking-widest">
                        Reception Desk
                      </span>
                      <span className="text-white font-semibold">{HOTEL_INFO.phone}</span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919830000000"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <div>
                      <span className="text-emerald-400 block text-[10px] uppercase font-cinzel tracking-widest">
                        WhatsApp Desk
                      </span>
                      <span className="text-white font-semibold">+91 98300 00000</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#18181f] border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white" />
                    <div>
                      <span className="text-zinc-400 block text-[10px] uppercase font-cinzel tracking-widest">
                        Email Concierge
                      </span>
                      <span className="text-white font-semibold">{HOTEL_INFO.email}</span>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex items-start gap-3 text-xs text-zinc-300 font-space">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{HOTEL_INFO.address}</span>
                </div>

                <div className="pt-4 border-t border-zinc-800 space-y-2">
                  <span className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#d4af37] block">
                    Follow NX Elit
                  </span>
                  <SocialLinks size="sm" />
                </div>
              </div>

              {/* Direct Enquiry Form */}
              <div className="lg:col-span-7 bg-[#121216] border border-zinc-800 p-8 rounded-3xl shadow-2xl">
                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="font-serif text-3xl font-bold text-white">
                      Enquiry Transmitted
                    </h4>
                    <p className="font-space text-sm text-zinc-300 max-w-md mx-auto font-light">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our desk team at NX Elit has received your details and will connect via phone/WhatsApp at <span className="text-white font-medium">{formData.phone}</span> shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-cinzel text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-space text-xs">
                    <div>
                      <h4 className="font-serif text-2xl font-bold text-white">
                        Direct Reservation Enquiry
                      </h4>
                      <p className="text-zinc-400 font-light mt-1">
                        Best rate guarantee with zero middleman commissions.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="space-y-1">
                        <label className="text-zinc-400 text-[11px] uppercase font-cinzel tracking-wider">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikramaditya Roy"
                          className="w-full px-4 py-3 bg-[#18181f] border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-zinc-400 text-[11px] uppercase font-cinzel tracking-wider">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98300 00000"
                          className="w-full px-4 py-3 bg-[#18181f] border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1 sm:col-span-1">
                        <label className="text-zinc-400 text-[11px] uppercase font-cinzel tracking-wider">
                          Sanctuary
                        </label>
                        <select
                          value={formData.roomCategory}
                          onChange={(e) => setFormData({ ...formData, roomCategory: e.target.value })}
                          className="w-full px-3 py-3 bg-[#18181f] border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-500"
                        >
                          {ROOM_CATEGORIES.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1 sm:col-span-1">
                        <label className="text-zinc-400 text-[11px] uppercase font-cinzel tracking-wider">
                          Check-In
                        </label>
                        <input
                          type="date"
                          value={formData.checkIn}
                          onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                          className="w-full px-3 py-3 bg-[#18181f] border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-500"
                        />
                      </div>

                      <div className="space-y-1 sm:col-span-1">
                        <label className="text-zinc-400 text-[11px] uppercase font-cinzel tracking-wider">
                          Check-Out
                        </label>
                        <input
                          type="date"
                          value={formData.checkOut}
                          onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                          className="w-full px-3 py-3 bg-[#18181f] border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-zinc-400 text-[11px] uppercase font-cinzel tracking-wider">
                        Special Requests or Itinerary
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Airport transfer, late arrival, banquet requirements..."
                        className="w-full px-4 py-3 bg-[#18181f] border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-zinc-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-white text-black font-cinzel font-bold text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-zinc-200 transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      {loading ? <span>Transmitting...</span> : <span>Send Reservation Request</span>}
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </BevelPanel>
      </div>
    </section>
  );
}
