'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, CheckCircle2, Clock, Award, ArrowLeft, Zap } from 'lucide-react';
import Link from 'next/link';

// Mock initial quests for demonstration
const initialQuests = [
  { id: 1, title: 'Attend Regional Meetup', description: 'Join the local co-working session in your city.', xp: 150, category: 'Cultural', completed: false },
  { id: 2, title: 'Solve Weekly Tech Quiz', description: 'Test your algorithmic skills on the house portal.', xp: 200, category: 'Technical', completed: true },
  { id: 3, title: 'House Sports Tournament', description: 'Participate in the online chess or esports match.', xp: 250, category: 'Sports', completed: false },
  { id: 4, title: 'Contribute House Lore Trivia', description: 'Submit a historical fact about your house mascot.', xp: 100, category: 'Cultural', completed: false },
];

export default function QuestboardPage() {
  const [quests, setQuests] = useState(initialQuests);
  const [totalXP, setTotalXP] = useState(
    initialQuests.reduce((acc, q) => (q.completed ? acc + q.xp : acc), 0)
  );

  const completeQuest = (id: number, xp: number) => {
    setQuests(quests.map(q => {
      if (q.id === id && !q.completed) {
        setTotalXP(prev => prev + xp);
        return { ...q, completed: true };
      }
      return q;
    }));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      {/* Top Header Navigation */}
      <div className="max-w-5xl mx-auto flex items-center justify-between pb-8 border-b border-slate-800/80">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-3 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-2xl text-purple-300 font-semibold">
          <Zap className="w-5 h-5 text-purple-400" />
          <span>{totalXP} Total XP</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto pt-8 space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">House Questboard</h1>
          <p className="text-slate-400 mt-2">Complete daily and weekly micro-tasks to earn activity badges, level up your profile, and support your house!</p>
        </div>

        {/* Quests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quests.map((quest) => (
            <motion.div 
              key={quest.id}
              whileHover={{ scale: 1.01 }}
              className={`p-6 rounded-2xl border transition backdrop-blur-sm flex flex-col justify-between ${
                quest.completed 
                  ? 'bg-slate-900/30 border-purple-500/30 opacity-75' 
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    quest.category === 'Technical' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                    quest.category === 'Cultural' ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20' :
                    'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {quest.category}
                  </span>
                  <span className="text-sm font-bold text-purple-400">+{quest.xp} XP</span>
                </div>

                <h3 className="text-xl font-bold text-white">{quest.title}</h3>
                <p className="text-sm text-slate-400">{quest.description}</p>
              </div>

              <div className="pt-6">
                {quest.completed ? (
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5" /> Completed & Claimed
                  </div>
                ) : (
                  <button 
                    onClick={() => completeQuest(quest.id, quest.xp)}
                    className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition shadow-md shadow-purple-600/20"
                  >
                    Complete Quest
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}