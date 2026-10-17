import { useEffect, useRef, useState } from 'react';
import { clamp, rng, useLive } from '../../stage/hooks';
import { usePrefersReducedMotion } from "../../core/hooks/use-prefers-reduced-motion/usePrefersReducedMotion";

/* gentle fake levels that move while the specimen is on screen */
export function useLevels(n, ms = 140) {
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  const [vals, setVals] = useState(() => Array.from({ length: n }, (_, i) => 0.3 + ((i * 37) % 50) / 100));
  const t = useRef(0);
  useEffect(() => {
    if (!live || reduced) return undefined;
    const id = setInterval(() => {
      t.current += 1;
      setVals((a) => a.map((_, i) => clamp(0.45 + 0.32 * Math.sin(t.current * (0.25 + i * 0.07) + i * 1.7) + 0.16 * Math.sin(t.current * 0.9 + i * 3.1), 0.05, 0.98)));
    }, ms);
    return () => clearInterval(id);
  }, [live, reduced, ms]);
  return vals;
}

export const WAVE = (() => { const r = rng(21); return Array.from({ length: 56 }, (_, k) => 0.12 + 0.82 * Math.abs(Math.sin(k / 6.5) * Math.sin(k / 2.3 + 1)) * (0.5 + r() * 0.5)); })();
