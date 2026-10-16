import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Cinzel, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const serifFont = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cinzelFont = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceFont = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Elite Hotel | Boutique 4-Star Luxury on EM Bypass, Kolkata",
  description: "Experience The Elite Hotel, Kolkata's premier dark boutique sanctuary featuring 28 designer residences across colour-coded floors, The Elite Lounge & restaurant, and 2,000 sq ft banquet space.",
  keywords: ["The Elite Hotel", "Elite Hotels", "EM Bypass Hotel Kolkata", "Boutique Hotel Kolkata", "Luxury Hotel Kolkata", "The Elite Lounge", "Studio Arden Interiors"],
  openGraph: {
    title: "The Elite Hotel | Boutique Luxury on EM Bypass",
    description: "A dark, motion-led boutique hotel experience designed by Studio Arden.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 675,
        alt: "The Elite Exterior Skyline",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
};

import { ScrollProvider } from "@/lib/scroll/ScrollProvider";
import { PersistentShell } from "@/components/shell/PersistentShell";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${serifFont.variable} ${cinzelFont.variable} ${spaceFont.variable} scroll-smooth dark`}>
      <body className="bg-[#09090b] text-[#f4f3ef] font-sans antialiased selection:bg-white selection:text-black">
        <ScrollProvider>
          <PersistentShell />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
