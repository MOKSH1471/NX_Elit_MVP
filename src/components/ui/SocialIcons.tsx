"use client";

import React from "react";

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function TripAdvisorIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 2.478.904 4.746 2.404 6.503L2 22l4.896-1.52C8.36 21.434 10.117 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-4.75 12a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zm9.5 0a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zM12 7.25c1.25 0 2.38.45 3.27 1.2.51-.31 1.09-.48 1.73-.48 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5a3.48 3.48 0 0 1-1.73-.46c-.89.74-2.02 1.19-3.27 1.19s-2.38-.45-3.27-1.19a3.48 3.48 0 0 1-1.73.46c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5c.64 0 1.22.17 1.73.48.89-.75 2.02-1.2 3.27-1.2z" />
    </svg>
  );
}

export interface SocialLinkItem {
  id: string;
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  hoverGlow: string;
  hoverColor: string;
}

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: "instagram",
    name: "Instagram",
    href: "https://instagram.com/nxelitkolkata",
    icon: InstagramIcon,
    hoverGlow: "hover:shadow-[0_0_16px_rgba(225,48,108,0.4)]",
    hoverColor: "hover:text-rose-400 hover:border-rose-500/40",
  },
  {
    id: "facebook",
    name: "Facebook",
    href: "https://facebook.com/nxelitkolkata",
    icon: FacebookIcon,
    hoverGlow: "hover:shadow-[0_0_16px_rgba(24,119,242,0.4)]",
    hoverColor: "hover:text-blue-400 hover:border-blue-500/40",
  },
  {
    id: "x",
    name: "X (Twitter)",
    href: "https://x.com/nxelitkolkata",
    icon: XIcon,
    hoverGlow: "hover:shadow-[0_0_16px_rgba(255,255,255,0.3)]",
    hoverColor: "hover:text-white hover:border-white/50",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://linkedin.com/company/nx-elit-hotel",
    icon: LinkedInIcon,
    hoverGlow: "hover:shadow-[0_0_16px_rgba(10,102,194,0.4)]",
    hoverColor: "hover:text-sky-400 hover:border-sky-500/40",
  },
  {
    id: "youtube",
    name: "YouTube",
    href: "https://youtube.com/@nxelitkolkata",
    icon: YouTubeIcon,
    hoverGlow: "hover:shadow-[0_0_16px_rgba(255,0,0,0.4)]",
    hoverColor: "hover:text-red-400 hover:border-red-500/40",
  },
  {
    id: "tripadvisor",
    name: "TripAdvisor",
    href: "https://tripadvisor.com",
    icon: TripAdvisorIcon,
    hoverGlow: "hover:shadow-[0_0_16px_rgba(52,224,161,0.4)]",
    hoverColor: "hover:text-emerald-400 hover:border-emerald-500/40",
  },
];

interface SocialLinksProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SocialLinks({ className = "", size = "md" }: SocialLinksProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className={`flex items-center space-x-2.5 flex-wrap gap-y-2 ${className}`}>
      {SOCIAL_LINKS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow NX Elit on ${item.name}`}
            title={`Follow NX Elit on ${item.name}`}
            className={`${sizeClasses[size]} rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 ${item.hoverColor} ${item.hoverGlow} hover:bg-white/[0.08] hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm cursor-pointer`}
          >
            <Icon className={iconSizes[size]} />
          </a>
        );
      })}
    </div>
  );
}
