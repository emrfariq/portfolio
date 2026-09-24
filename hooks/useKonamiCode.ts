'use client';

import { useEffect, useCallback } from 'react';
import { useAppStore } from '@/store/useAppStore';

const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

export function useKonamiCode() {
  const toggleHackerMode = useAppStore((state) => state.toggleHackerMode);
  const isHackerMode = useAppStore((state) => state.isHackerMode);

  const handleKeyDown = useCallback(() => {
    let sequenceIndex = 0;

    return (e: KeyboardEvent) => {
      if (e.key === KONAMI_SEQUENCE[sequenceIndex]) {
        sequenceIndex++;
        if (sequenceIndex === KONAMI_SEQUENCE.length) {
          toggleHackerMode();
          sequenceIndex = 0;
        }
      } else {
        sequenceIndex = e.key === KONAMI_SEQUENCE[0] ? 1 : 0;
      }
    };
  }, [toggleHackerMode]);

  useEffect(() => {
    const handler = handleKeyDown();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleKeyDown]);

  return { isHackerMode };
}
