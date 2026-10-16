import { useCallback, useEffect, useRef, useState } from 'react';
import { rng } from '../../stage/hooks';
import { f1 } from '../../stage/chartKit';
import c from './passes.module.css';

/* ---- helpers ---- */

/** A flag that switches itself off again: [on, fire]. */
export function useFlash(ms = 700) {
  const [on, setOn] = useState(false);
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const fire = useCallback(() => {
    setOn(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOn(false), ms);
  }, [ms]);
  return [on, fire];
}

/** Bar widths for a barcode: the same bars for the same seed. */
export const barsOf = (seed, n) => {
  const r = rng(seed);
  let x = 0;
  const rects = [];
  for (let i = 0; i < n; i += 1) {
    const w = 1 + Math.floor(r() * 3);
    rects.push([x, w]);
    x += w + 1 + Math.floor(r() * 2);
  }
  return { rects, width: x };
};

export const BC = { a: barsOf(11, 34), b: barsOf(23, 30), c: barsOf(37, 26), d: barsOf(51, 40), e: barsOf(7, 22) };

export function Barcode({ code, className = '' }) {
  return (
    <svg className={`${c.bars} ${className}`} viewBox={`0 0 ${code.width} 24`} preserveAspectRatio="none" aria-hidden="true">
      {code.rects.map(([x, w]) => <rect key={x} x={x} y="0" width={w} height="24" />)}
    </svg>
  );
}

/** A rectangle whose edges are bitten by half-circles: nx along the top and bottom, ny down the sides. */
export const perf = (w, h, r, nx, ny) => {
  let d = 'M0 0';
  for (let k = 0; k < nx; k += 1) { const x = ((k + 0.5) * w) / nx; d += `L${f1(x - r)} 0A${r} ${r} 0 0 0 ${f1(x + r)} 0`; }
  d += `L${w} 0`;
  for (let k = 0; k < ny; k += 1) { const y = ((k + 0.5) * h) / ny; d += `L${w} ${f1(y - r)}A${r} ${r} 0 0 0 ${w} ${f1(y + r)}`; }
  d += `L${w} ${h}`;
  for (let k = nx - 1; k >= 0; k -= 1) { const x = ((k + 0.5) * w) / nx; d += `L${f1(x + r)} ${h}A${r} ${r} 0 0 0 ${f1(x - r)} ${h}`; }
  d += `L0 ${h}`;
  for (let k = ny - 1; k >= 0; k -= 1) { const y = ((k + 0.5) * h) / ny; d += `L0 ${f1(y + r)}A${r} ${r} 0 0 0 0 ${f1(y - r)}`; }
  return `${d}Z`;
};
