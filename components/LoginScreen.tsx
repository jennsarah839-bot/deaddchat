
import React, { useState } from 'react';
import { GhostIcon } from './icons/GhostIcon';

interface LoginScreenProps {
  onLogin: (username: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
      <div className="w-full max-w-sm p-8 space-y-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl shadow-purple-500/10">
        <div className="text-center">
          <div className="flex justify-center mb-4">
             <GhostIcon className="h-16 w-16 text-purple-400" />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            deadchat
          </h1>
          <p className="mt-2 text-slate-400">it's not that deep. chat & dash.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="off"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-slate-900/70 border border-slate-700 rounded-full text-center text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="choose your fighter name"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent text-sm font-semibold rounded-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-purple-500 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
            disabled={!username.trim()}
          >
            enter the void
          </button>
        </form>
      </div>
    </div>
  );
};
