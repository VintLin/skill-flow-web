'use client';

import { useEffect, useRef } from 'react';

interface NoisePoint {
  x: number;
  y: number;
  opacity: number;
}

export function NoiseDriftBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const SCALE = 200;
    const LENGTH = 10;
    const STROKE_LENGTH = 2.2;
    const SPACING = 15;
    const TWO_PI = Math.PI * 2;

    let width = 0;
    let height = 0;
    let dotColor: [number, number, number] = [235, 235, 235];
    let dotAlpha = 0.3;
    let animationFrame = 0;
    let points: NoisePoint[] = [];

    function createRandom(seed: number): () => number {
      let state = seed >>> 0;
      return () => {
        state += 0x6d2b79f5;
        let t = state;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }

    function createNoise(seed: number) {
      const random = createRandom(seed);
      const permutation = new Uint8Array(512);
      const values = new Uint8Array(256);

      for (let i = 0; i < 256; i++) values[i] = i;
      for (let i = 255; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
      }
      for (let i = 0; i < 512; i++) permutation[i] = values[i & 255];

      const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      const grad = (hash: number, x: number, y: number, z: number) => {
        const h = hash & 15;
        const u = h < 8 ? x : y;
        const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
      };

      return (x: number, y: number, z: number) => {
        const xf = Math.floor(x), yf = Math.floor(y), zf = Math.floor(z);
        const X = xf & 255, Y = yf & 255, Z = zf & 255;
        const tx = x - xf, ty = y - yf, tz = z - zf;
        const u = fade(tx), v = fade(ty), w = fade(tz);
        const A = permutation[X] + Y, AA = permutation[A] + Z, AB = permutation[A + 1] + Z;
        const B = permutation[X + 1] + Y, BA = permutation[B] + Z, BB = permutation[B + 1] + Z;

        return (lerp(
          lerp(lerp(grad(permutation[AA], tx, ty, tz), grad(permutation[BA], tx - 1, ty, tz), u),
              lerp(grad(permutation[AB], tx, ty - 1, tz), grad(permutation[BB], tx - 1, ty - 1, tz), u), v),
          lerp(lerp(grad(permutation[AA + 1], tx, ty, tz - 1), grad(permutation[BA + 1], tx - 1, ty, tz - 1), u),
              lerp(grad(permutation[AB + 1], tx, ty - 1, tz - 1), grad(permutation[BB + 1], tx - 1, ty - 1, tz - 1), u), v), w
        ) + 1) / 2;
      };
    }

    const noise = createNoise(Date.now());

    function addPoints() {
      points = [];
      for (let x = -SPACING / 2; x < width + SPACING; x += SPACING) {
        for (let y = -SPACING / 2; y < height + SPACING; y += SPACING) {
          points.push({ x, y, opacity: Math.random() * 0.5 + 0.5 });
        }
      }
    }

    function resize() {
      if (!canvas || !ctx) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      addPoints();
    }

    function drawFrame(now: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const t = now / 10000;
      const [r, g, b] = dotColor;

      for (const point of points) {
        const rad = (noise(point.x / SCALE, point.y / SCALE, t) - 0.5) * 2 * TWO_PI;
        const length = (noise(point.x / SCALE, point.y / SCALE, t * 2) + 0.5) * LENGTH;
        const nx = point.x + Math.cos(rad) * length;
        const ny = point.y + Math.sin(rad) * length;
        const dx = Math.cos(rad) * STROKE_LENGTH * 0.5;
        const dy = Math.sin(rad) * STROKE_LENGTH * 0.5;
        const alpha = (Math.abs(Math.cos(rad)) * 0.5 + 0.5) * point.opacity * dotAlpha;

        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        ctx.moveTo(nx - dx, ny - dy);
        ctx.lineTo(nx + dx, ny + dy);
        ctx.stroke();
      }

      animationFrame = requestAnimationFrame(drawFrame);
    }

    resize();
    drawFrame(performance.now());

    const handleResize = () => {
      resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
