'use client';

import { useEffect } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { useKonamiCode } from '@/hooks/useKonamiCode';
import { AnimatePresence } from 'framer-motion';
import HackerTerminal from './HackerTerminal';

export default function HackerModeManager() {
  const isHackerMode = useAppStore((state) => state.isHackerMode);
  useKonamiCode();

  useEffect(() => {
    const html = document.documentElement;
    if (isHackerMode) {
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
    }
  }, [isHackerMode]);

  return (
    <AnimatePresence>
      {isHackerMode && <HackerTerminal />}
    </AnimatePresence>
  );
}
