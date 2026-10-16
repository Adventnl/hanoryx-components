import { useState } from 'react';
import { rng, clamp } from '../../stage/hooks';
import c from './charts.module.css';

/* ---- data and geometry helpers ---- */
export const series = (n, seed, lo = 0.15, hi = 0.95) => {
  const r = rng(seed);
  return Array.from({ length: n }, () => lo + r() * (hi - lo));
};

export const smooth3 = (a) => a.map((v, i) => (v + (a[i - 1] ?? v) + (a[i + 1] ?? v)) / 3);

export const f1 = (n) => +n.toFixed(1);

export const pts = (v, w = 100, h = 50, top = 4) => v.map((y, i) => [f1((i * w) / (v.length - 1)), f1(h - y * (h - top))]);

export const poly = (p) => p.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join('');

/* a smooth curve through the points (Catmull-Rom turned into cubic segments) */
export const curve = (p) => p.reduce((d, [x, y], i) => {
  if (!i) return `M${x} ${y}`;
  const [x0, y0] = p[i - 2] || p[i - 1];
  const [x1, y1] = p[i - 1];
  const [x3, y3] = p[i + 1] || p[i];
  return `${d}C${f1(x1 + (x - x0) / 6)} ${f1(y1 + (y - y0) / 6)} ${f1(x - (x3 - x1) / 6)} ${f1(y - (y3 - y1) / 6)} ${x} ${y}`;
}, '');

export const areaOf = (p, h = 50) => `${curve(p)}L${p[p.length - 1][0]} ${h}L${p[0][0]} ${h}Z`;

export const polar = (cx, cy, r, deg) => {
  const a = (deg * Math.PI) / 180;
  return [f1(cx + Math.sin(a) * r), f1(cy - Math.cos(a) * r)];
};

export const sector = (cx, cy, r0, r1, a0, a1) => {
  const [x0, y0] = polar(cx, cy, r1, a0);
  const [x1, y1] = polar(cx, cy, r1, a1);
  const [x2, y2] = polar(cx, cy, r0, a1);
  const [x3, y3] = polar(cx, cy, r0, a0);
  const big = a1 - a0 > 180 ? 1 : 0;
  return `M${x0} ${y0}A${r1} ${r1} 0 ${big} 1 ${x1} ${y1}L${x2} ${y2}A${r0} ${r0} 0 ${big} 0 ${x3} ${y3}Z`;
};

export const pct = (v) => Math.round(v * 100);

/* moving a pointer across a chart picks the item under it; arrow keys do the same.
   `edges` (cumulative 0..1 boundaries) is for items of unequal width. */
export function useScan(n, { axis = 'x', label, edges } = {}) {
  const [i, setI] = useState(-1);
  const at = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const v = clamp(axis === 'x' ? (e.clientX - r.left) / r.width : (e.clientY - r.top) / r.height, 0, 0.9999);
    setI(edges ? edges.findIndex((x) => v < x) : Math.floor(v * n));
  };
  const bind = {
    role: 'slider',
    tabIndex: 0,
    'aria-valuemin': 0,
    'aria-valuemax': n,
    'aria-valuenow': i + 1,
    'aria-valuetext': i < 0 ? 'nothing selected' : label(i),
    style: { touchAction: axis === 'x' ? 'pan-y' : 'pan-x' },
    onPointerMove: at,
    onPointerDown: at,
    onPointerLeave: (e) => { if (e.pointerType === 'mouse') setI(-1); },
    onBlur: () => setI(-1),
    onKeyDown: (e) => {
      const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (d) { e.preventDefault(); setI((k) => clamp(k < 0 ? (d > 0 ? 0 : n - 1) : k + d, 0, n - 1)); }
      if (e.key === 'Escape') setI(-1);
    },
  };
  return [i, bind];
}

/* a list of names that lights the matching part of a chart */
export function Legend({ items, hot, setHot, sticky = false, unit = '' }) {
  return (
    <ul className={c.legend}>
      {items.map(([name, value], i) => (
        <li key={name}>
          <button
            type="button"
            data-hot={hot === i}
            onPointerEnter={sticky ? undefined : () => setHot(i)}
            onPointerLeave={sticky ? undefined : () => setHot(-1)}
            onFocus={sticky ? undefined : () => setHot(i)}
            onBlur={sticky ? undefined : () => setHot(-1)}
            onClick={() => setHot(i)}
          >
            <b style={{ '--k': i }} />{name}{value !== undefined && <em>{value}{unit}</em>}
          </button>
        </li>
      ))}
    </ul>
  );
}
