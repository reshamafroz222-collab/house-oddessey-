'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserCheck, ShieldAlert, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SquadPage() {
  const [members, setMembers] = useState<string[]>(['Resham Afroz', 'Alex Johnson', 'Sam Taylor']);
  const [newMember, setNewMember] = useState<string>('');

  const addMember = () => {
    if (newMember.trim() && members.length < 5) {
      setMembers([...members, newMember.trim()]);
      setNewMember('');
    }
  };

  const removeMember = (indexToRemove: number) => {
    setMembers(members.filter((_, idx) => idx !== indexToRemove));
  };

  const isValidSquad = members.length >= 3 && members.length <= 5;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto flex items-center justify-between pb-8 border-b border-slate-800/80">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <span className="text-xs px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium">
          House Squad Builder
        </span>
      </div>

      <div className="max-w-4xl mx-auto pt-8 space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Form Your Quest Team</h1>
          <p className="text-slate-400 mt-2">Team rules: Minimum 3 members, maximum 5 members per team to qualify for joint quests.</p>
        </div>

        {/* Member Counter Banner */}
        <div className={`p-4 rounded-xl border flex items-center gap-3 text-sm font-semibold ${
          isValidSquad 
            ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
            : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
        }`}>
          {isValidSquad ? <UserCheck className="w-5 h-5" /> : <ShieldAlert className="w-5 h-5" />}
          <span>
            Current Squad Size: {members.length} / 5 Members 
            {members.length < 3 ? ' (Need at least 3 members to be valid)' : members.length > 5 ? ' (Max 5 members allowed)' : ' (Valid Squad!)'}
          </span>
        </div>

        {/* Member Input */}
        <div className="flex gap-3">
          <input 
            type="text" 
            placeholder="Enter teammate name..." 
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-purple-500"
          />
          <button 
            onClick={addMember}
            disabled={members.length >= 5}
            className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition disabled:opacity-50"
          >
            Add Teammate
          </button>
        </div>

        {/* Squad List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {members.map((m, idx) => (
            <motion.div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="font-semibold text-white">{m}</span>
              </div>
              <button 
                onClick={() => removeMember(idx)}
                className="text-xs text-rose-400 hover:text-rose-300 transition"
              >
                Remove
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}