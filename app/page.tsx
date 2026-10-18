'use client';

import { motion } from 'framer-motion';
import { Trophy, Compass, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center z-10 space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-2">
          <Sparkles className="w-4 h-4" /> House Odyssey: Gamified Onboarding
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-200 to-indigo-400 bg-clip-text text-transparent">
          Level Up Your Campus Journey
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          Welcome to your house! Complete daily micro-quests, unlock rare achievement badges, and track your contribution across technical, cultural, and sports tracks.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/questboard" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition shadow-lg shadow-purple-600/25">
            Enter Questboard <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/lore" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-semibold transition">
            Explore House Lore
          </Link>
        </div>
      </motion.div>

      {/* Feature Cards Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-20 z-10"
      >
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">House Questboard</h3>
          <p className="text-sm text-slate-400">Tackle daily micro-tasks, attend meetups, and earn activity badges and XP points.</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
            <Trophy className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Dynamic Portfolios</h3>
          <p className="text-sm text-slate-400">Showcase your contributions across technical, sports, and cultural tracks in real-time.</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-3">
          <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">House Lore & Trivia</h3>
          <p className="text-sm text-slate-400">Discover your house's rich history, mascot heritage, and leadership traditions.</p>
        </div>
      </motion.div>
    </main>
  );
}