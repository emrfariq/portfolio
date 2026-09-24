'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// TODO: Replace with real Spotify API integration or actual track data
const MOCK_TRACK = {
  title: 'Plastic Love',
  artist: 'Mariya Takeuchi',
  album: 'Variety',
  duration: '6:02',
  progress: 68,
};

export default function SpotifyWidget() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-[8000] flex flex-col items-end gap-2">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="bg-brutal-black border-2 border-terminal-green p-space-md shadow-[6px_6px_0px_#00FF41] w-64"
          >
            {/* Track Info */}
            <div className="flex items-center gap-space-sm mb-space-sm">
              {/* Spinning Vinyl */}
              <div
                className={`relative w-12 h-12 flex-shrink-0 ${isPlaying ? 'animate-spin-vinyl' : ''}`}
                style={{ animationDuration: '3s' }}
              >
                <div className="w-12 h-12 rounded-full bg-brutal-black border-2 border-terminal-green flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-terminal-black border border-terminal-green flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-terminal-green" />
                  </div>
                </div>
                {/* Vinyl rings */}
                <div className="absolute inset-2 rounded-full border border-terminal-dim-green opacity-40" />
                <div className="absolute inset-3.5 rounded-full border border-terminal-dim-green opacity-20" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-label-md text-label-md text-terminal-green truncate uppercase">
                  {MOCK_TRACK.title}
                </p>
                <p className="font-label-sm text-label-sm text-terminal-dim-green truncate uppercase mt-0.5">
                  {MOCK_TRACK.artist}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-space-sm">
              <div className="w-full h-1.5 bg-terminal-dim-green/30">
                <div
                  className="h-full bg-terminal-green transition-all duration-300"
                  style={{ width: `${MOCK_TRACK.progress}%` }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="font-label-sm text-label-sm text-terminal-dim-green">4:05</span>
                <span className="font-label-sm text-label-sm text-terminal-dim-green">{MOCK_TRACK.duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              {/* Equalizer Bars */}
              <div className="flex items-end gap-[2px] h-5">
                <div
                  className={`w-1 bg-terminal-green ${isPlaying ? 'animate-eq-bar-1' : ''}`}
                  style={{ height: isPlaying ? undefined : '8px' }}
                />
                <div
                  className={`w-1 bg-terminal-green ${isPlaying ? 'animate-eq-bar-2' : ''}`}
                  style={{ height: isPlaying ? undefined : '16px' }}
                />
                <div
                  className={`w-1 bg-terminal-green ${isPlaying ? 'animate-eq-bar-3' : ''}`}
                  style={{ height: isPlaying ? undefined : '12px' }}
                />
                <div
                  className={`w-1 bg-terminal-green ${isPlaying ? 'animate-eq-bar-1' : ''}`}
                  style={{ animationDelay: '0.3s', height: isPlaying ? undefined : '6px' }}
                />
              </div>

              {/* Play/Pause */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 bg-terminal-green text-brutal-black flex items-center justify-center hover:bg-cyber-cyan transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>

              <span className="font-label-sm text-label-sm text-terminal-dim-green uppercase">
                NOW_PLAYING
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-brutal-black border-2 border-terminal-green p-3 shadow-[4px_4px_0px_#00FF41] hover:shadow-[2px_2px_0px_#00FF41] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
        aria-label="Toggle Spotify widget"
      >
        {/* Mini vinyl */}
        <div className={`w-6 h-6 rounded-full border-2 border-terminal-green flex items-center justify-center ${isPlaying && isExpanded ? 'animate-spin-vinyl' : ''}`}>
          <div className="w-2 h-2 rounded-full bg-terminal-green" />
        </div>
      </motion.button>
    </div>
  );
}
