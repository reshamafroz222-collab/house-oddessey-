'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Shield, Globe, Award, ArrowLeft, Lock, Edit3 } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'Resham Afroz',
    email: 'resham@student.iitm.ac.in',
    social: 'github.com/reshamafroz',
    house: 'Saranda',
    level: 4,
    xp: 650,
    isPrivate: true,
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto flex items-center justify-between pb-8 border-b border-slate-800/80">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <span className="text-xs px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium">
          Level {profile.level} Explorer
        </span>
      </div>

      <div className="max-w-4xl mx-auto pt-8 space-y-8">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-24 h-24 rounded-full bg-purple-600/20 border-2 border-purple-500 flex items-center justify-center text-purple-400 font-bold text-3xl">
            {profile.name.charAt(0)}
          </div>

          <div className="space-y-2 text-center md:text-left flex-1">
            <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
            <p className="text-slate-400 flex items-center justify-center md:justify-start gap-2 text-sm">
              <Mail className="w-4 h-4" /> {profile.email}
            </p>
            <p className="text-slate-400 flex items-center justify-center md:justify-start gap-2 text-sm">
              <Globe className="w-4 h-4" /> {profile.social}
            </p>
          </div>

          <button 
            onClick={() => setProfile({ ...profile, isPrivate: !profile.isPrivate })}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition ${
              profile.isPrivate 
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
                : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            {profile.isPrivate ? 'Profile Private' : 'Profile Public'}
          </button>
        </motion.div>

        {/* Level & XP Progress Bar */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
          <div className="flex justify-between text-sm font-semibold">
            <span>Level {profile.level} Progress</span>
            <span className="text-purple-400">{profile.xp} / 1000 XP</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-600 to-indigo-500 h-full rounded-full transition-all duration-500" 
              style={{ width: `${(profile.xp / 1000) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}