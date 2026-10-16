import { useState } from 'react';
import c from './archive.module.css';

/* 12 */ export function ClipPile() {
  const [n, setN] = useState(3);
  return (
    <button type="button" className={c.clips} onClick={() => setN((v) => (v >= 8 ? 1 : v + 1))} aria-label={`${n} paper clips. Click to add one`}>
      {Array.from({ length: n }, (_, k) => (
        <svg key={k} viewBox="0 0 12 28" style={{ left: `${10 + ((k * 29) % 70)}%`, top: `${8 + ((k * 41) % 46)}%`, '--r': `${(k * 53) % 180 - 90}deg` }}><path d="M9 20V6a3 3 0 0 0-6 0v16a5 5 0 0 0 10 0V8" /></svg>
      ))}
    </button>
  );
}
