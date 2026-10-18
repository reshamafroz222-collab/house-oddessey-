'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, Trophy, Users, Sparkles, Zap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { HOUSES } from '@/data/houses';
import { useState } from 'react';

export default function HouseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const house = HOUSES.find((h) => h.id === resolvedParams.id) || HOUSES[0];

  const [activeTab, setActiveTab] = useState<'overview' | 'quests' | 'squads'>('overview');
  const [completedQuests, setCompletedQuests] = useState<number[]>([]);

  const toggleQuest = (id: number) => {
    setCompletedQuests(prev => 
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen text-slate-100 p-6 md:p-12 relative overflow-hidden">
      {/* Background Glow matching house accent */}
      <div className={`absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br ${house.accentColor} opacity-10 rounded-full blur-[140px] pointer-events-none`} />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        {/* Navigation & Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <Link href="/houses" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
            <ArrowLeft className="w-4 h-4" /> Back to All Houses
          </Link>
          <span className="text-xs px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium">
            House Portal v1.0
          </span>
        </div>

        {/* House Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 md:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl flex flex-col md:flex-row items-center gap-8 shadow-2xl"
        >
          <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${house.accentColor} flex items-center justify-center text-white shadow-xl shadow-orange-500/10`}>
            <Shield className="w-12 h-12" />
          </div>

          <div className="space-y-3 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Official House Commons
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">{house.name} House</h1>
            <p className="text-slate-400 text-base max-w-2xl">{house.description}</p>
            <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest">Mascot Spirit: {house.mascot}</p>
          </div>
        </motion.div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-800 gap-8">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`pb-4 text-sm font-semibold transition border-b-2 -mb-px ${activeTab === 'overview' ? 'border-orange-500 text-orange-400' : 'border-transparent text-slate-400 hover:text-white'}`}
          >
            House Overview
          </button>
          <button 
            onClick={() => setActiveTab('quests')}
            className={`pb-4 text-sm font-semibold transition border-b-2 -mb-px ${activeTab === 'quests' ? 'border-orange-500 text-orange-400' : 'border-transparent text-slate-400 hover:text-white'}`}
          >
            House Quests & XP
          </button>
          <button 
            onClick={() => setActiveTab('squads')}
            className={`pb-4 text-sm font-semibold transition border-b-2 -mb-px ${activeTab === 'squads' ? 'border-orange-500 text-orange-400' : 'border-transparent text-slate-400 hover:text-white'}`}
          >
            Active Squads
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'overview' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <Trophy className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Live Leaderboard Rank</h3>
              <p className="text-2xl font-extrabold text-orange-400">#2 in Campus</p>
              <p className="text-xs text-slate-400">Competing across technical and cultural tracks.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <Zap className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-bold text-white">Total House XP</h3>
              <p className="text-2xl font-extrabold text-purple-300">4,850 XP</p>
              <p className="text-xs text-slate-400">Earned through micro-tasks and event participation.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <Users className="w-6 h-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Active Members</h3>
              <p className="text-2xl font-extrabold text-emerald-300">142 Builders</p>
              <p className="text-xs text-slate-400">Spread across global regional hubs.</p>
            </div>
          </motion.div>
        )}

        {activeTab === 'quests' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Exclusive {house.name} Quests</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((id) => {
                const isCompleted = completedQuests.includes(id);
                return (
                  <div key={id} className={`p-6 rounded-2xl border transition flex flex-col justify-between space-y-4 ${isCompleted ? 'bg-slate-900/30 border-orange-500/30' : 'bg-slate-900/80 border-slate-800'}`}>
                    <div className="space-y-1">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 font-medium border border-orange-500/20">
                        {id % 2 === 0 ? 'Technical' : 'Cultural'} Challenge
                      </span>
                      <h4 className="text-lg font-bold text-white mt-2">{house.name} Mission #{id}</h4>
                      <p className="text-sm text-slate-400">Complete this task to earn +150 XP for {house.name} House.</p>
                    </div>
                    <button 
                      onClick={() => toggleQuest(id)}
                      className={`w-full py-2.5 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 ${isCompleted ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-orange-600 hover:bg-orange-500 text-white'}`}
                    >
                      {isCompleted ? <><CheckCircle2 className="w-4 h-4" /> Quest Completed</> : 'Claim Quest'}
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'squads' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-4">
            <Users className="w-10 h-10 text-orange-400 mx-auto" />
            <h3 className="text-2xl font-bold text-white">{house.name} Squad Coalitions</h3>
            <p className="text-slate-400 max-w-md mx-auto">Form squads of 3 to 5 members within {house.name} House to collaborate on joint hackathons and earn multiplier XP.</p>
            <Link href="/squad" className="inline-block px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold transition shadow-lg shadow-orange-600/20">
              Open Squad Builder
            </Link>
          </motion.div>
        )}
      </div>
    </main>
  );
}