import { useEffect, useRef, useState } from 'react';
import { useDrag, useLive } from '../../stage/hooks';
import { usePrefersReducedMotion } from '../../core/hooks/usePrefersReducedMotion';
import { arc, polar } from '../../stage/chartKit';
import c from './cockpit.module.css';

export const SEQ = [0.34, 0.62, 0.47, 0.8, 0.26, 0.7];

/* ---- the dial every gauge is made from ---- */
export function Gauge({ title, unit, min, max, sweep = 270, major, minors = 4, bands = [], init = 0.5, digits = 0, labelEvery = 1 }) {
  const [v, bind, set] = useDrag({ mode: 'r', init, range: sweep });
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  const [touched, setTouched] = useState(false);
  const idx = useRef(0);
  useEffect(() => {
    if (!live || reduced || touched) return undefined;
    const id = setInterval(() => { idx.current += 1; set(SEQ[idx.current % SEQ.length]); }, 1900);
    return () => clearInterval(id);
  }, [live, reduced, touched, set]);

  const start = -sweep / 2;
  const at = (val) => start + ((val - min) / (max - min)) * sweep;
  const steps = Math.round((max - min) / major);
  const value = min + v * (max - min);
  return (
    <div
      className={c.gauge}
      {...bind}
      onPointerDown={(e) => { setTouched(true); bind.onPointerDown(e); }}
      aria-label={`${title}, ${unit}. Drag the needle or use the arrow keys.`}
      aria-valuetext={`${value.toFixed(digits)} ${unit}`}
      data-active={touched}
      style={{ ...bind.style }}
    >
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="48" className={c.bezel} />
        <circle cx="50" cy="50" r="44" className={c.face} />
        {bands.map(([a, b, tone], k) => <path key={k} d={arc(50, 50, 40, at(a), at(b))} className={c[tone]} />)}
        {Array.from({ length: steps * (minors + 1) + 1 }, (_, k) => {
          const deg = start + (k / (steps * (minors + 1))) * sweep;
          const big = k % (minors + 1) === 0;
          const [x1, y1] = polar(50, 50, 44, deg);
          const [x2, y2] = polar(50, 50, big ? 36 : 40, deg);
          return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} className={big ? c.tickBig : c.tick} />;
        })}
        {Array.from({ length: steps + 1 }, (_, k) => {
          if (k % labelEvery) return null;
          const val = min + k * major;
          const [x, y] = polar(50, 50, 29, start + (k / steps) * sweep);
          return <text key={k} x={x} y={y} textAnchor="middle" dominantBaseline="central" className={c.num}>{val}</text>;
        })}
        <text x="50" y="68" textAnchor="middle" className={c.ttl}>{title}</text>
        <text x="50" y="76" textAnchor="middle" className={c.unit}>{unit}</text>
        <g className={c.needle} style={{ transform: `rotate(${start + v * sweep}deg)` }}><path d="M50 14 53 52 50 56 47 52Z" /><circle cx="50" cy="50" r="4.5" /></g>
      </svg>
      <output>{value.toFixed(digits)}</output>
    </div>
  );
}

export const G = (cfg) => function Dial() { return <Gauge {...cfg} />; };
