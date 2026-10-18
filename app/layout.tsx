import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SarandaBackground from "./components/SarandaBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saranda House Odyssey - Gamified Onboarding",
  description: "Level up your campus journey with quests and squads.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-100 min-h-screen relative bg-[#0d0907]`}>
        {/* Immersive Animated Tiger & Burnt-Orange Background */}
        <SarandaBackground/>
        
        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar/>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}