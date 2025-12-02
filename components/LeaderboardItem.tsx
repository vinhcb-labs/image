import React from 'react';
import type { LeaderboardEntry } from '../types';

interface LeaderboardItemProps {
  item: LeaderboardEntry;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ item }) => {
  const getRankStyles = () => {
    switch (item.rank) {
      case 1:
        return {
          glow: 'shadow-[0_0_30px_-5px_rgba(234,179,8,0.6)]',
          border: 'border-yellow-500/50',
          text: 'text-yellow-400',
          bg: 'bg-yellow-500/10',
          badge: 'bg-yellow-500',
          badgeText: 'text-black',
        };
      case 2:
        return {
          glow: 'shadow-[0_0_30px_-5px_rgba(200,200,200,0.5)]',
          border: 'border-slate-300/50',
          text: 'text-slate-200',
          bg: 'bg-slate-400/10',
          badge: 'bg-slate-300',
          badgeText: 'text-slate-900',
        };
      case 3:
        return {
          glow: 'shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)]',
          border: 'border-orange-500/50',
          text: 'text-orange-400',
          bg: 'bg-orange-500/10',
          badge: 'bg-orange-500',
          badgeText: 'text-white',
        };
      default:
        return {
          glow: 'hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)]',
          border: 'border-white/10 hover:border-cyan-400/50',
          text: 'text-slate-300 group-hover:text-cyan-200',
          bg: 'bg-white/5 hover:bg-cyan-900/20',
          badge: 'bg-white/10 group-hover:bg-cyan-500',
          badgeText: 'text-slate-400 group-hover:text-black',
        };
    }
  };

  const style = getRankStyles();
  const initial = item.name.charAt(0).toUpperCase();

  return (
    <a 
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative w-full transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1`}
    >
      <div className={`
        relative flex items-center gap-4 md:gap-6 p-3 md:p-4 rounded-xl border backdrop-blur-md transition-all duration-300
        ${style.bg} ${style.border} ${style.glow}
      `}>
        
        {/* Rank Indicator */}
        <div className={`
          flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg font-mono font-bold text-lg md:text-xl shadow-lg transition-colors duration-300
          ${style.badge} ${style.badgeText}
        `}>
          {item.rank}
        </div>

        {/* Separator Line */}
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

        {/* Name */}
        <div className="flex-grow min-w-0">
          <h3 className={`
            font-bold text-sm md:text-lg tracking-wide uppercase truncate transition-colors duration-300
            ${style.text}
          `}>
            {item.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
             <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${item.rank <= 3 ? style.badge : 'bg-cyan-500'}`}></div>
             <span className="text-[10px] text-white/40 font-mono tracking-widest">LIVE STATUS: ACTIVE</span>
          </div>
        </div>

        {/* Icon / Portal */}
        <div className="relative shrink-0">
           <div className={`absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 ${style.border} bg-white/20`}></div>
           <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-white/50 transition-colors">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                 <span className="text-xs font-mono text-white/50">{initial}</span>
              </div>
           </div>
        </div>

        {/* Decorative Corner Accents for Top 3 */}
        {item.rank <= 3 && (
          <>
            <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r rounded-tr-sm ${style.text} opacity-50`}></div>
            <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l rounded-bl-sm ${style.text} opacity-50`}></div>
          </>
        )}
      </div>
    </a>
  );
};

export default LeaderboardItem;