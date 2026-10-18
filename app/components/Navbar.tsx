'use client';

import Link from 'next/link';
import { Compass, Users, User, BookOpen, Home, Zap, Shield, ShieldAlert } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-lg bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          <Zap className="w-5 h-5 text-purple-400" /> House Odyssey
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-purple-400 transition flex items-center gap-1.5">
            <Home className="w-4 h-4" /> Home
          </Link>
          <Link href="/houses" className="hover:text-orange-400 transition flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> Houses
          </Link>
          <Link href="/questboard" className="hover:text-purple-400 transition flex items-center gap-1.5">
            <Compass className="w-4 h-4" /> Questboard
          </Link>
          <Link href="/squad" className="hover:text-purple-400 transition flex items-center gap-1.5">
            <Users className="w-4 h-4" /> Squad
          </Link>
          <Link href="/profile" className="hover:text-purple-400 transition flex items-center gap-1.5">
            <User className="w-4 h-4" /> Profile
          </Link>
          <Link href="/lore" className="hover:text-purple-400 transition flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" /> Lore
          </Link>
          <Link href="/admin" className="hover:text-red-400 transition flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4" /> Admin
          </Link>
        </div>
      </div>
    </header>
  );
}