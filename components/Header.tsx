
import React from 'react';
import { GhostIcon } from './icons/GhostIcon';

interface HeaderProps {
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-slate-900/50 backdrop-blur-sm border-b border-slate-800 shadow-lg shadow-black/20 z-10">
      <div className="flex items-center gap-3">
        <GhostIcon className="h-8 w-8 text-purple-400" />
        <h1 className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          deadchat
        </h1>
      </div>
      <button
        onClick={onLogout}
        className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 border border-slate-700 rounded-full hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50 transition-all duration-300"
      >
        Leave
      </button>
    </header>
  );
};
