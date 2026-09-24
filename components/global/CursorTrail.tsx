'use client';

import { useEffect, useRef } from 'react';
import { useAppStore } from '@/store/useAppStore';

interface TrailPoint {
  x: number;
  y: number;
  alpha: number;
  size: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);
  const isHackerMode = useAppStore((state) => state.isHackerMode);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 1,
        size: 6,
      });
      if (trailRef.current.length > 40) {
        trailRef.current.shift();
      }
    };
    window.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const trail = trailRef.current;
      for (let i = 0; i < trail.length; i++) {
        const point = trail[i];
        point.alpha -= 0.025;
        point.size *= 0.97;

        if (point.alpha <= 0) continue;

        const color = isHackerMode ? '0, 255, 65' : '255, 94, 151';
        const accentColor = isHackerMode ? '0, 229, 255' : '0, 245, 160';

        // Neon glow
        ctx.save();
        ctx.globalAlpha = point.alpha * 0.6;
        ctx.shadowColor = `rgba(${color}, 1)`;
        ctx.shadowBlur = 15;
        ctx.fillStyle = `rgba(${color}, ${point.alpha})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size * (i / trail.length), 0, Math.PI * 2);
        ctx.fill();

        // Accent inner dot
        if (i > trail.length * 0.7) {
          ctx.shadowColor = `rgba(${accentColor}, 1)`;
          ctx.shadowBlur = 8;
          ctx.fillStyle = `rgba(${accentColor}, ${point.alpha * 0.8})`;
          ctx.beginPath();
          ctx.arc(point.x, point.y, (point.size * (i / trail.length)) * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // Remove dead points
      trailRef.current = trailRef.current.filter((p) => p.alpha > 0);

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [isHackerMode]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9000] w-full h-full"
      aria-hidden="true"
    />
  );
}
