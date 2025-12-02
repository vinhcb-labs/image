import React from 'react';
import type { LeaderboardEntry } from '../types';
import LeaderboardItem from './LeaderboardItem';

interface LeaderboardProps {
  data: LeaderboardEntry[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center w-full space-y-8">
      {/* Header Section */}
      <div className="w-full text-center space-y-2">
        <div className="inline-block px-4 py-1 border border-cyan-500/30 rounded-full bg-cyan-950/30 backdrop-blur-md mb-2">
          <span className="text-cyan-400 text-xs md:text-sm font-mono tracking-[0.3em] uppercase">
            Sector: Prime // AI Club
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 nano-glow-text filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          TOP KOL
        </h1>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto opacity-50"></div>
        <p className="text-slate-400 font-light tracking-widest uppercase text-sm md:text-base">
          Global Leaderboard System
        </p>
      </div>

      {/* List Container */}
      <div className="w-full flex flex-col gap-4 p-6 md:p-8 rounded-3xl nano-glass nano-border-glow">
        <div className="flex justify-between items-center px-4 pb-2 border-b border-white/10 text-[10px] md:text-xs text-slate-500 font-mono tracking-widest uppercase">
          <span>Rank Index</span>
          <span>Entity Name</span>
        </div>
        {data.map((entry) => (
          <LeaderboardItem key={entry.rank} item={entry} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;