import { useState } from 'react';
import c from "../faders.module.css";

const HIST = Array.from({ length: 28 }, (_, i) => 0.15 + 0.85 * Math.exp(-(((i - 12) / 7) ** 2)) * (0.8 + 0.2 * Math.sin(i * 1.9)));

/* 14 */ export function HistogramRange() {
  const [lo, setLo] = useState(20);
  const [hi, setHi] = useState(68);
  return (
    <div className={c.hist} style={{ '--lo': lo, '--hi': hi }}>
      <ol>{HIST.map((h, i) => <li key={i} style={{ height: `${h * 100}%` }} data-in={(i / 27) * 100 >= lo && (i / 27) * 100 <= hi} />)}</ol>
      <input type="range" min="0" max="100" value={lo} aria-label="Histogram start" onChange={(e) => setLo(Math.min(Number(e.target.value), hi - 5))} />
      <input type="range" min="0" max="100" value={hi} aria-label="Histogram end" onChange={(e) => setHi(Math.max(Number(e.target.value), lo + 5))} />
    </div>
  );
}
