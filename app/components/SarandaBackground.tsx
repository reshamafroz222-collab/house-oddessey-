'use client';

import { motion } from 'framer-motion';

export default function SarandaBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0d0907]">
      {/* 1. Textured Grunged Gradient (Matching Image 1) */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-orange-950/20 to-black opacity-90" />

      {/* 2. Animated Amber Glow Orbs (Representing Tiger Eyes / Jungle Sunbeams) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[120px]"
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-700/15 rounded-full blur-[140px]"
      />

      {/* 3. Subtle Scratch / Grunge Overlay Texture lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}