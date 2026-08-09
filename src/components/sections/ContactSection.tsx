"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { HOTEL_INFO, ROOM_CATEGORIES } from "@/lib/data";
import { InView } from "@/components/core/in-view";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomCategory: "executive-deluxe",
    message: "",
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
    <section id="contact" className="py-24 bg-[#09090b] text-[#f4f3ef] relative border-t border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <InView className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Direct Reservations & Concierge
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Connect with Reception
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-xl mx-auto">
            Bypass third-party OTA commissions and reserve directly with our reception team for guaranteed best rates and personalized arrangements.
          </p>
        </InView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Contact Info Sidebar */}
          <InView transition={{ delay: 0.1, duration: 0.5 }} className="lg:col-span-5">
            <div className="bg-[#121216] border border-zinc-800 p-8 rounded-3xl space-y-8 shadow-xl">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Front Desk & Reception
                </h3>
                <p className="text-xs text-zinc-300 mt-1 font-light">
                  Our reservation desk operates 24/7 to assist with room bookings, banquet inquiries, and airport transfers.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-[#18181f] border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase tracking-widest font-semibold">Direct Reception Phone</span>
                    <span className="text-white font-semibold text-sm">{HOTEL_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919830000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-emerald-400 block text-[10px] uppercase tracking-widest font-semibold">Instant WhatsApp Desk</span>
                    <span className="text-white font-semibold text-sm">+91 98300 00000</span>
                  </div>
                </a>

                <a
                  href={`mailto:${HOTEL_INFO.email}`}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-[#18181f] border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-800 text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase tracking-widest font-semibold">Email Reservations</span>
                    <span className="text-white font-semibold text-sm">{HOTEL_INFO.email}</span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400 font-light">
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="text-zinc-300">{HOTEL_INFO.address}</span>
                </p>
              </div>
            </div>
          </InView>

          {/* Contact & Enquiry Form */}
          <InView transition={{ delay: 0.2, duration: 0.5 }} className="lg:col-span-7">
            <div className="bg-[#121216] border border-zinc-800 p-8 rounded-3xl shadow-xl">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-white">
                    Enquiry Successfully Sent
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed font-light">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our desk team has received your enquiry. We will reach out to you at <span className="text-white font-medium">{formData.phone}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Direct Enquiry Form
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priyesh Sen"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#18181f] border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98300 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#18181f] border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="priyesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#18181f] border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                        Interested Category
                      </label>
                      <select
                        value={formData.roomCategory}
                        onChange={(e) => setFormData({ ...formData, roomCategory: e.target.value })}
                        className="w-full bg-[#18181f] border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-white"
                      >
                        {ROOM_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.id} className="bg-[#121216]">
                            {cat.name}
                          </option>
                        ))}
                        <option value="banquet" className="bg-[#121216]">Banquet Hall Event</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                        Target Check-In
                      </label>
                      <input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full bg-[#18181f] border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                        Target Check-Out
                      </label>
                      <input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full bg-[#18181f] border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                      Special Requirements / Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Floor color preference (Blue, Green, Red), airport transfer, or banquet arrangement notes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#18181f] border border-zinc-800 rounded-xl p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-widest uppercase rounded-xl transition-colors shadow-md flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Direct Enquiry</span>
                        <Send className="w-4 h-4 text-black" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
