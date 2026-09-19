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
  title: "NX Elit | Boutique 4-Star Hotel on EM Bypass, Kolkata",
  description: "Experience NX Elit, Kolkata's premier dark boutique hotel featuring 28 designer rooms across colour-coded floors, NX Kitchen lounge & restaurant, and 2,000 sq ft banquet space.",
  keywords: ["NX Elit Hotel", "EM Bypass Hotel Kolkata", "Boutique Hotel Kolkata", "Luxury Hotel Kolkata", "NX Kitchen", "Vinoo Chadha Interiors"],
  openGraph: {
    title: "NX Elit | Boutique Luxury Hotel on EM Bypass",
    description: "A dark, motion-led boutique hotel experience designed by Vinoo Chadha.",
    images: [
      {
        url: "https://images.t2online.in/cdn-cgi/image/width=1280,height=720,fit=cover,gravity=face,quality=70,format=auto/https://apis.t2online.in/getImageStream/7514/1783774819201.jpeg",
        width: 1280,
        height: 720,
        alt: "NX Elit Exterior Skyline",
      },
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
