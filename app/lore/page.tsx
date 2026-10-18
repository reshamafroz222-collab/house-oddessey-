'use client';

import { motion } from 'framer-motion';
import { BookOpen, Shield, Award, ArrowLeft, Flame } from 'lucide-react';
import Link from 'next/link';

export default function LorePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      {/* Top Header Navigation */}
      <div className="max-w-4xl mx-auto flex items-center justify-between pb-8 border-b border-slate-800/80">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-medium">
          <Flame className="w-4 h-4" /> House Heritage & Lore
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto pt-10 space-y-12">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            The Legend of Our House
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Every house has a story, a spirit, and a legacy. Discover the traditions and values that unite our members across tracks and regions.
          </p>
        </motion.div>

        {/* Story Blocks */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4"
          >
            <div className="flex items-center gap-3 text-purple-400">
              <Shield className="w-6 h-6" />
              <h3 className="text-2xl font-bold text-white">Our Core Pillars</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Founded on the pillars of relentless curiosity, collaboration, and community support, our house stands as a beacon for builders, creators, and athletes. Whether you code late into the night, craft digital art, or compete in sports tournaments, your contribution shapes our legacy.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4"
          >
            <div className="flex items-center gap-3 text-indigo-400">
              <BookOpen className="w-6 h-6" />
              <h3 className="text-2xl font-bold text-white">Mascot & Traditions</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Our mascot represents agility, resilience, and unity. During major hackathons and cultural festivals, house members rally together under our banner to share resources, mentor newcomers, and conquer challenges as one cohesive unit.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}