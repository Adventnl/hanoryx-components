import { useState } from 'react';
import c from "../passes.module.css";

/* 7 */
const STAMPS = [['ENTRY', 'circle'], ['TRANSIT', 'rect'], ['CLEARED', 'oval'], ['EXIT', 'hex'], ['RETURN', 'tri'], ['VISA OK', 'dbl']];

function StampArt({ word, kind }) {
  const shape = {
    circle: <><circle cx="30" cy="30" r="26" /><circle cx="30" cy="30" r="21" strokeWidth="0.8" /></>,
    rect: <rect x="5" y="13" width="50" height="34" rx="3" />,
    oval: <ellipse cx="30" cy="30" rx="27" ry="18" />,
    hex: <polygon points="30,4 54,17 54,43 30,56 6,43 6,17" />,
    tri: <polygon points="30,5 56,52 4,52" />,
    dbl: <><rect x="4" y="12" width="52" height="36" rx="2" /><rect x="8" y="16" width="44" height="28" rx="1" strokeWidth="0.8" /></>,
  }[kind];
  return (
    <svg viewBox="0 0 60 60" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      {shape}
      <text x="30" y={kind === 'tri' ? 43 : 32} textAnchor="middle" fontSize={word.length > 6 ? 6.6 : 8} fill="currentColor" stroke="none">{word}</text>
      <text x="30" y={kind === 'tri' ? 49 : 41} textAnchor="middle" fontSize="4.6" fill="currentColor" stroke="none">14 OCT</text>
    </svg>
  );
}

export function PassportPage() {
  const [n, setN] = useState(2);
  return (
    <div className={c.fig}>
      <div className={c.ps}>
        <span className={c.kd}>Visas · page 07</span>
        <span className={c.psGrid}>
          {STAMPS.map(([word, kind], i) => (
            <span key={word} className={c.psSlot}>
              {i < n && <span className={c.psStamp} data-red={i % 2 === 0} style={{ '--r': `${(i * 37) % 23 - 11}deg` }}><StampArt word={word} kind={kind} /></span>}
            </span>
          ))}
        </span>
      </div>
      <p className={c.row}>
        <button type="button" className={c.btn} disabled={n >= STAMPS.length} onClick={() => setN((k) => Math.min(STAMPS.length, k + 1))}>{n >= STAMPS.length ? 'Page full' : 'Stamp'}</button>
        <button type="button" className={c.btn} onClick={() => setN(0)}>Clear</button>
      </p>
    </div>
  );
}
