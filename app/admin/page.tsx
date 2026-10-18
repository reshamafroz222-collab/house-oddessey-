'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Plus, Trash2, CheckSquare, ArrowLeft, Award } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  const [quests, setQuests] = useState([
    { id: 1, title: 'Attend Regional Meetup', xp: 150, category: 'Cultural' },
    { id: 2, title: 'Solve Weekly Tech Quiz', xp: 200, category: 'Technical' },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newXp, setNewXp] = useState(100);
  const [newCategory, setNewCategory] = useState('Technical');

  const addQuest = () => {
    if (newTitle.trim()) {
      setQuests([...quests, { id: Date.now(), title: newTitle.trim(), xp: Number(newXp), category: newCategory }]);
      setNewTitle('');
      setNewXp(100);
    }
  };

  const deleteQuest = (id: number) => {
    setQuests(quests.filter(q => q.id !== id));
  };

  return (
    <main className="min-h-screen text-slate-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto flex items-center justify-between pb-8 border-b border-slate-800/80">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <span className="text-xs px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-medium">
          Admin Control Center
        </span>
      </div>

      <div className="max-w-4xl mx-auto pt-8 space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">House Organizers Panel</h1>
          <p className="text-slate-400 mt-2">Manage house quests, create challenges, and monitor community engagement without touching code[cite: 3].</p>
        </div>

        {/* Create Quest Form */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Plus className="w-5 h-5 text-orange-400" /> Create New House Quest
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text" 
              placeholder="Quest Title..." 
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-orange-500"
            />
            <input 
              type="number" 
              placeholder="XP Reward" 
              value={newXp}
              onChange={(e) => setNewXp(Number(e.target.value))}
              className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-orange-500"
            />
            <select 
              value={newCategory} 
              onChange={(e) => setNewCategory(e.target.value)}
              className="px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-orange-500"
            >
              <option value="Technical">Technical</option>
              <option value="Cultural">Cultural</option>
              <option value="Sports">Sports</option>
            </select>
          </div>

          <button 
            onClick={addQuest}
            className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold transition shadow-lg shadow-orange-600/20"
          >
            Publish Quest to Board
          </button>
        </div>

        {/* Existing Quests List */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Active House Quests ({quests.length})</h3>
          
          <div className="space-y-3">
            {quests.map((quest) => (
              <motion.div 
                key={quest.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-400 font-medium border border-orange-500/20">
                      {quest.category}
                    </span>
                    <span className="text-xs text-purple-400 font-bold">+{quest.xp} XP</span>
                  </div>
                  <h4 className="font-semibold text-white">{quest.title}</h4>
                </div>

                <button 
                  onClick={() => deleteQuest(quest.id)}
                  className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}