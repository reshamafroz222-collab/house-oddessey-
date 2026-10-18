'use client';

import { motion } from 'framer-motion';
import { Shield, ArrowRight, Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { HOUSES } from '@/data/houses';

export default function HousesDirectoryPage() {
  return (
    <main className="min-h-screen text-slate-100 p-6 md:p-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between pb-8 border-b border-slate-800/80">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-medium">
          <Sparkles className="w-4 h-4" /> All 12 Community Houses
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-10 space-y-8">
        <div>
          <h1 className="text-4xl font-extrabold text-white">Choose Your House Commons</h1>
          <p className="text-slate-400 mt-2">Explore all 12 houses, view their mascots, and jump into their dedicated operational portals.</p>
        </div>

        {/* Houses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOUSES.map((house, idx) => (
            <motion.div 
              key={house.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm flex flex-col justify-between space-y-4 shadow-xl"
            >
              <div className="space-y-2">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${house.accentColor} flex items-center justify-center text-white font-bold shadow-lg`}>
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">{house.name} House</h3>
                <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider">Mascot: {house.mascot}</p>
                <p className="text-sm text-slate-400">{house.description}</p>
              </div>

              <Link 
                href={`/questboard`}
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition"
              >
                <span>Enter House Portal</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}