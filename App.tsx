import React, { useEffect, useState } from 'react';
import Leaderboard from './components/Leaderboard';
import type { LeaderboardEntry } from './types';

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: 'App Tạo Ảnh Tết', url: 'https://aistudio.google.com/apps/drive/1WxCk6_FhTjwTAhQd2T6_Nos3ozKyWwYL', imageUrl: 'https://picsum.photos/seed/tet-cua-nang/100' },
  { rank: 2, name: 'Bóng hồng triêụ đô', url: 'https://ai.studio/apps/drive/1I1dZxfKaSAVTULWIrgcomecOEICt8lVG', imageUrl: 'https://picsum.photos/seed/bong-hong/100' },
  { rank: 3, name: 'AI CHỈNH ẢNH SUPER VIP', url: 'https://ai.studio/apps/drive/1NtN-NCNnKGiR7X0ttAPNhdAA9bN1K3Gg', imageUrl: 'https://picsum.photos/seed/chinh-anh/100' },
  { rank: 4, name: 'AI LUX Fashion', url: 'https://ai.studio/apps/drive/16QROjvog5eNhr4YWEmifDSkDQnx6e0OM', imageUrl: 'https://picsum.photos/seed/lux-fashion/100' },
  { rank: 5, name: 'FASHION BABY', url: 'https://ai.studio/apps/drive/1IFrVTBQ7mh9pm1BI9S5cITswoFTIPrJa', imageUrl: 'https://picsum.photos/seed/fashion-baby/100' },
];

const MultiverseBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Base Void */}
    <div className="absolute inset-0 bg-[#020617]"></div>
    
    {/* Animated Nebula Layers */}
    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-slow-spin opacity-40 bg-[conic-gradient(from_0deg_at_50%_50%,_#000000_0%,_#4c1d95_20%,_#000000_40%,_#2e1065_60%,_#000000_80%,_#4c1d95_100%)] blur-[100px]"></div>
    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-reverse-slow-spin opacity-30 mix-blend-screen bg-[conic-gradient(from_180deg_at_50%_50%,_#000000_0%,_#0891b2_25%,_#000000_50%,_#2563eb_75%,_#000000_100%)] blur-[80px]"></div>
    
    {/* Stars / Dust */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-200"></div>
  </div>
);

const GlobalStyles = () => (
  <style>{`
    @keyframes slowSpin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-slow-spin {
      animation: slowSpin 60s linear infinite;
    }
    .animate-reverse-slow-spin {
      animation: slowSpin 45s linear infinite reverse;
    }
    .nano-glass {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }
    .nano-glow-text {
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    }
    .nano-border-glow {
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.05);
    }
  `}</style>
);

const App: React.FC = () => {
  const [shouldRedirect, setShouldRedirect] = useState(true);

  useEffect(() => {
    const hash = window.location.hash.substring(1); 
    if (hash) {
      const rankToFind = parseInt(hash, 10);
      if (!isNaN(rankToFind)) {
        const targetApp = leaderboardData.find(app => app.rank === rankToFind);
        if (targetApp) {
          window.location.href = targetApp.url;
          return; 
        }
      }
    }
    setShouldRedirect(false);
  }, []);

  if (shouldRedirect) {
    return (
      <main className="min-h-screen w-full font-sans flex items-center justify-center p-4 relative overflow-hidden bg-black text-white">
        <MultiverseBackground />
        <GlobalStyles />
        <div className="text-center relative z-10 nano-glass p-12 rounded-2xl">
          <h1 className="text-4xl md:text-6xl font-black tracking-widest animate-pulse nano-glow-text">INITIALIZING...</h1>
          <p className="text-xl md:text-2xl mt-4 text-cyan-300 font-mono tracking-widest">CONNECTING TO MULTIVERSE</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full font-sans flex items-center justify-center p-4 relative overflow-hidden text-slate-100">
      <GlobalStyles />
      <MultiverseBackground />
      <div className="relative z-10 w-full max-w-4xl animate-[fadeIn_1s_ease-out]">
        <Leaderboard data={leaderboardData} />
      </div>
    </main>
  );
}

export default App;