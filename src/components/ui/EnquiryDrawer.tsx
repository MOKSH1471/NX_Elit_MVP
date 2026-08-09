"use client";

import React, { useState } from "react";
import { X, Calendar, User, Phone, Mail, CheckCircle2, Building } from "lucide-react";
import { ROOM_CATEGORIES } from "@/lib/data";

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
  preselectedType?: 'room' | 'banquet';
}

export default function EnquiryDrawer({
  isOpen,
  onClose,
  preselectedRoomId,
  preselectedType = 'room'
}: EnquiryDrawerProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomCategory: preselectedRoomId || "executive-deluxe",
    guests: "2 Adults",
    enquiryType: preselectedType,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Overlay Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0f0f13] border-l border-zinc-800 text-[#f4f3ef] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-[#121216]">
            <div>
              <h3 className="font-serif text-2xl text-white font-semibold tracking-wide">
                Direct Guest Enquiry
              </h3>
              <p className="text-xs text-zinc-400 mt-1 font-light">
                Guaranteed direct rate & personalized reception response
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-semibold text-white">
                  Enquiry Received
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed max-w-xs mx-auto font-light">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our desk team at NX Elit will contact you directly via phone/WhatsApp at{" "}
                  <span className="text-white font-medium">{formData.phone}</span> within 30 minutes.
                </p>

                <div className="pt-6 border-t border-zinc-800 text-xs text-zinc-400 space-y-2 font-light">
                  <p>Prefer instant action?</p>
                  <a
                    href="https://wa.me/919830000000"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors text-xs"
                  >
                    <span>Connect on WhatsApp Now</span>
                  </a>
                </div>

                <button
                  onClick={handleReset}
                  className="mt-6 w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-xs tracking-wider uppercase font-semibold rounded-lg transition-colors"
                >
                  Close & Continue Browsing
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Enquiry Type Selector */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-black/60 rounded-lg border border-zinc-800 text-xs">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, enquiryType: 'room' })}
                    className={`py-2 px-3 rounded-md font-medium transition-all ${
                      formData.enquiryType === 'room'
                        ? 'bg-white text-black shadow-sm font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Room Reservation
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, enquiryType: 'banquet' })}
                    className={`py-2 px-3 rounded-md font-medium transition-all ${
                      formData.enquiryType === 'banquet'
                        ? 'bg-white text-black shadow-sm font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Banquet / Event
                  </button>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#16161d] border border-zinc-800 rounded-lg py-2.5 pl-10 pr-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#16161d] border border-zinc-800 rounded-lg py-2.5 pl-10 pr-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#16161d] border border-zinc-800 rounded-lg py-2.5 pl-10 pr-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                    />
                  </div>
                </div>

                {/* Category Selection */}
                {formData.enquiryType === 'room' ? (
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                      Room Category
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                      <select
                        value={formData.roomCategory}
                        onChange={(e) => setFormData({ ...formData, roomCategory: e.target.value })}
                        className="w-full bg-[#16161d] border border-zinc-800 rounded-lg py-2.5 pl-10 pr-3 text-sm text-white focus:outline-none focus:border-white"
                      >
                        {ROOM_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.id} className="bg-[#0f0f13] text-white">
                            {cat.name} ({cat.priceStarting})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                      Event Details
                    </label>
                    <input
                      type="text"
                      placeholder="Corporate Offsite, Seminar, Social Reception"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#16161d] border border-zinc-800 rounded-lg py-2.5 px-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                    />
                  </div>
                )}

                {/* Check-in / Check-out Dates */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                      Check-In
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                      <input
                        type="date"
                        required
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full bg-[#16161d] border border-zinc-800 rounded-lg py-2.5 pl-9 pr-2 text-xs text-white focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                      Check-Out
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                      <input
                        type="date"
                        required
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full bg-[#16161d] border border-zinc-800 rounded-lg py-2.5 pl-9 pr-2 text-xs text-white focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                    Special Requests / Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Floor color preference (Blue, Green, Red), airport transfer, or banquet notes..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#16161d] border border-zinc-800 rounded-lg p-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-white hover:bg-zinc-200 text-black font-semibold text-xs tracking-widest uppercase rounded-lg transition-colors shadow-md flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <span>Submit Direct Enquiry</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
