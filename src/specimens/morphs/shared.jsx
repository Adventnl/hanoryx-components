import { useEffect, useRef, useState } from 'react';
import { rng, useCycle } from '../../stage/hooks';
import { usePrefersReducedMotion } from '../../core/hooks/usePrefersReducedMotion';
import c from './morphs.module.css';

/* ---- outlines: 32 points sampled around the centre, so any two can be blended ---- */
export const N = 32;

export const TAU = Math.PI * 2;

export const radial = (fn) => Array.from({ length: N }, (_, i) => { const a = (i / N) * TAU - Math.PI / 2; const r = fn(a); return [50 + Math.cos(a) * r * 50, 50 + Math.sin(a) * r * 50]; });

export const ngonR = (n, rot = -Math.PI / 2) => (a) => { const s = TAU / n; const d = ((((a - rot) % s) + s) % s) - s / 2; return Math.cos(Math.PI / n) / Math.cos(d); };

export const starR = (p, ri) => (a) => {
  const phi = Math.PI / p;
  let t = ((((a + Math.PI / 2) % (2 * phi)) + 2 * phi) % (2 * phi));
  if (t > phi) t = 2 * phi - t;
  const x2 = ri * Math.cos(phi); const y2 = ri * Math.sin(phi);
  const dx = x2 - 1; const dy = y2;
  return y2 / (Math.cos(t) * dy - Math.sin(t) * dx);
};

export const squareR = (a) => 1 / Math.max(Math.abs(Math.cos(a)), Math.abs(Math.sin(a)));

export const plusR = (w, rot = 0) => (a) => { const cc = Math.abs(Math.cos(a + rot)); const ss = Math.abs(Math.sin(a + rot)); return Math.min(1.2, Math.max(Math.min(1 / (cc || 1e-6), w / (ss || 1e-6)), Math.min(w / (cc || 1e-6), 1 / (ss || 1e-6)))); };

export const gearR = (k) => (a) => 0.72 + 0.26 * Math.max(-1, Math.min(1, Math.sin((a + Math.PI / 2) * k) * 2.4));

export const flowerR = (k) => (a) => 0.58 + 0.42 * Math.abs(Math.cos((k * (a + Math.PI / 2)) / 2));

export const blobR = (seed) => { const r = rng(seed); const p = [r() * TAU, r() * TAU, r() * TAU]; return (a) => 0.74 + 0.14 * Math.sin(2 * a + p[0]) + 0.08 * Math.sin(3 * a + p[1]) + 0.06 * Math.sin(5 * a + p[2]); };

/* an outline given as a parametric curve is re-read as a radius per angle */
export const curveR = (pts) => {
  const q = pts.map(([x, y]) => ({ a: Math.atan2(y, x), r: Math.hypot(x, y) }));
  const mx = Math.max(...q.map((p) => p.r));
  return (a) => { const th = Math.atan2(Math.sin(a), Math.cos(a)); let best = q[0]; let d0 = 9; q.forEach((p) => { const d = Math.abs(Math.atan2(Math.sin(p.a - th), Math.cos(p.a - th))); if (d < d0) { d0 = d; best = p; } }); return best.r / mx; };
};

export const HEART = curveR(Array.from({ length: 360 }, (_, i) => { const t = (i / 360) * TAU; return [16 * Math.sin(t) ** 3, -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))]; }));

export const DROP = curveR(Array.from({ length: 360 }, (_, i) => { const t = (i / 360) * TAU; return [Math.sin(t) * Math.sin(t / 2), -Math.cos(t) + 0.1]; }));

export const poly = (pts) => `polygon(${pts.map(([x, y]) => `${x.toFixed(1)}% ${y.toFixed(1)}%`).join(',')})`;

export const S = {
  circle: radial(() => 1), square: radial(squareR), diamond: radial(ngonR(4)), tri: radial(ngonR(3)), pent: radial(ngonR(5)), hex: radial(ngonR(6)), oct: radial(ngonR(8)), dodec: radial(ngonR(12)),
  star5: radial(starR(5, 0.42)), star8: radial(starR(8, 0.55)), star12: radial(starR(12, 0.66)), star4: radial(starR(4, 0.3)),
  plus: radial(plusR(0.3)), cross: radial(plusR(0.3, Math.PI / 4)), heart: radial(HEART), drop: radial(DROP),
  gear6: radial(gearR(6)), gear9: radial(gearR(9)), gear14: radial(gearR(14)), flower3: radial(flowerR(3)), flower5: radial(flowerR(5)), flower8: radial(flowerR(8)),
  blob1: radial(blobR(3)), blob2: radial(blobR(8)), blob3: radial(blobR(14)), blob4: radial(blobR(21)),
};

export const cx = (...a) => a.filter(Boolean).join(' ');

/* ---- shapes that cycle through clipped outlines ---- */
export function Shifter({ title, list, auto = false, ms = 1500, hue = 0 }) {
  const [i, setI] = useState(0);
  const t = useCycle(list.length, ms);
  const idx = auto ? t : i;
  return (
    <button type="button" className={c.shifter} onClick={() => setI((v) => (v + 1) % list.length)} aria-label={`${title}: ${list[idx][0]}${auto ? '' : '. Click for the next shape'}`}>
      <i style={{ clipPath: poly(list[idx][1]), '--h': hue + idx * 40 }} />
      <small>{list[idx][0]}</small>
    </button>
  );
}

export const NAME = { tri: 'triangle', pent: 'pentagon', hex: 'hexagon', oct: 'octagon', dodec: 'dodecagon', star4: '4 points', star5: '5 points', star8: '8 points', star12: '12 points', gear6: '6 teeth', gear9: '9 teeth', gear14: '14 teeth', flower3: '3 petals', flower5: '5 petals', flower8: '8 petals', blob1: 'blob', blob2: 'blob', blob3: 'blob', blob4: 'blob' };

export const L = (...names) => names.map((n) => [NAME[n] ?? n, S[n]]);

export const mkShift = (title, names, opts) => function Shift() { return <Shifter title={title} list={L(...names)} {...opts} />; };

/* ---- numbers that tween, for outlines drawn in SVG ---- */
export function useTween(target, ms = 600) {
  const reduced = usePrefersReducedMotion();
  const [cur, setCur] = useState(target);
  const live = useRef(target);
  useEffect(() => {
    const from = live.current;
    const t0 = performance.now();
    let raf = 0;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / ms);
      const e = 1 - (1 - k) ** 3;
      const v = target.map((x, i) => from[i] + (x - from[i]) * e);
      live.current = v;
      setCur(v);
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return reduced ? target : cur;
}

/* ---- gooey: blur then threshold, so circles melt into each other ---- */
export const Goo = ({ id, std = 6 }) => (
  <svg width="0" height="0" aria-hidden="true" className={c.defs}><filter id={id}><feGaussianBlur in="SourceGraphic" stdDeviation={std} result="b" /><feColorMatrix in="b" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" /></filter></svg>
);
