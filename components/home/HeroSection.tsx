'use client';

import { Suspense, lazy } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const RetroTV = lazy(() => import('./RetroTV'));

const statusBadges = [
  { text: 'PORT_8080::ONLINE', bg: 'bg-brutal-black', textColor: 'text-terminal-green', shadow: 'shadow-[3px_3px_0px_#FF5E97]', rotate: '-rotate-[1deg]', dot: true },
  { text: 'LATENCY: 12ms TO EDGE', bg: 'bg-acid-yellow', textColor: 'text-brutal-black', shadow: 'shadow-[3px_3px_0px_#0E0E12]', rotate: 'rotate-[1.5deg]', dot: false },
  { text: 'SYS_INTEGRITY: 99.998%', bg: 'bg-soft-lavender', textColor: 'text-brutal-black', shadow: 'shadow-[3px_3px_0px_#0E0E12]', rotate: '-rotate-1', dot: false, hidden: 'hidden sm:inline-block' },
];

const systemStats = [
  '[ARCH: EVENT-DRIVEN CQRS]',
  '[RUNTIME: NODE 22 + GO 1.23]',
  '[MAX_QPS: 420,000]',
];

export default function HeroSection() {
  return (
    <section className="relative z-10 w-full px-margin-mobile lg:px-margin pt-8 pb-space-lg flex flex-col items-center justify-center text-center">
      {/* Ambient dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0 ambient-grid" />

      {/* Status badges */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-space-xs mb-space-md relative z-10"
      >
        {statusBadges.map((badge, i) => (
          <div
            key={i}
            className={`${badge.bg} ${badge.textColor} px-space-md py-1 ${badge.shadow} ${badge.rotate} flex items-center gap-space-xs ${badge.hidden || ''}`}
          >
            {badge.dot && (
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-ping" />
            )}
            <span className="font-label-sm text-label-sm tracking-widest uppercase">{badge.text}</span>
          </div>
        ))}
      </motion.div>

      {/* Subtitle label */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-space-sm relative z-10"
      >
        <p className="font-label-md text-label-md text-brutal-black uppercase tracking-wider bg-canvas-cream px-space-md py-space-xs inline-block shadow-[4px_4px_0px_#0E0E12]">
          FULLSTACK ARCHITECT &amp; CHAOS ENGINEER // BRIDGING SCALABLE DISTRIBUTED SYSTEMS &amp; POP EXPERIENCES
        </p>
      </motion.div>

      {/* BE YOURSELF — Glitch Typography */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 100 }}
        className="relative w-full select-none flex flex-col items-center justify-center z-10"
      >
        <h1 className="font-display-xl text-display-xl lg:text-[148px] lg:leading-[120px] text-brutal-black tracking-tighter uppercase relative inline-block mx-auto z-30">
          <span
            aria-hidden="true"
            className="absolute top-1.5 left-2 text-cyber-cyan opacity-80 mix-blend-multiply select-none animate-glitch-1"
          >
            BE YOURSELF
          </span>
          <span
            aria-hidden="true"
            className="absolute -top-1.5 -left-2 text-bubblegum-pink opacity-80 mix-blend-screen select-none animate-glitch-2"
          >
            BE YOURSELF
          </span>
          <span className="relative z-10 text-brutal-black drop-shadow-[4px_4px_0px_#FFE600]">
            BE YOURSELF
          </span>
        </h1>
      </motion.div>

      {/* 3D Retro TV */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full relative z-10"
      >
        <Suspense
          fallback={
            <div className="w-full h-[460px] max-w-[620px] mx-auto flex items-center justify-center bg-brutal-black/5">
              <div className="flex flex-col items-center gap-space-sm">
                <div className="font-label-lg text-label-lg text-on-surface-variant animate-pulse tracking-widest">
                  [Tuning Retro TV...]
                </div>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-bubblegum-pink animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <RetroTV />
        </Suspense>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="relative z-30 flex flex-col sm:flex-row items-center justify-center gap-space-md w-full max-w-2xl mt-2"
      >
        <Link
          href="/projects"
          id="hero-cta-projects"
          className="w-full sm:w-auto bg-electric-mint text-brutal-black px-space-lg py-space-md font-label-lg text-label-lg tracking-wider uppercase shadow-[6px_6px_0px_#0E0E12] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_#0E0E12] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-space-xs font-bold"
        >
          <span>EXPLORE PROJECTS</span>
          <span className="material-symbols-outlined text-[20px]">south</span>
        </Link>
        <Link
          href="#system-specs"
          id="hero-cta-specs"
          className="w-full sm:w-auto bg-bubblegum-pink text-brutal-black px-space-lg py-space-md font-label-lg text-label-lg tracking-wider uppercase shadow-[6px_6px_0px_#0E0E12] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_#0E0E12] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-space-xs font-bold"
        >
          <span>READ SYSTEM SPECS</span>
          <span className="material-symbols-outlined text-[20px]">bolt</span>
        </Link>
        <div className="hidden lg:flex absolute -right-24 -top-6 bg-acid-yellow text-brutal-black px-space-sm py-1 rotate-12 shadow-[3px_3px_0px_#0E0E12] font-label-sm text-label-sm uppercase">
          ⚡ 0% SANITIZED
        </div>
      </motion.div>

      {/* System stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 font-body-sm text-body-sm text-on-surface-variant relative z-10"
      >
        {systemStats.map((stat) => (
          <span key={stat}>{stat}</span>
        ))}
        <span className="text-secondary font-bold">[BUILD_PASSING]</span>
      </motion.div>
    </section>
  );
}
