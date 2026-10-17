import { useState } from 'react';
import c from "../charts.module.css";
import { f1 } from "../shared";

/* 22 */ const SLOPE = [[40, 62], [55, 48], [30, 71], [68, 52], [47, 33], [22, 38]];

export function SlopeLines() {
  const [k, setK] = useState(0);
  return (
    <button type="button" className={c.chBtn} aria-label={`Slope lines, line ${k + 1} of 6 highlighted. Click for the next`} onClick={() => setK((k + 1) % 6)}>
      <svg viewBox="0 0 100 52" aria-hidden="true">
        <path className={c.axis} d="M20 2V50M80 2V50" />
        <text className={c.t} x="20" y="-0.5" textAnchor="middle">2024</text>
        <text className={c.t} x="80" y="-0.5" textAnchor="middle">2025</text>
        {SLOPE.map(([a, b], i) => <line key={i} className={c.slope} data-on={i === k} x1="20" x2="80" y1={f1(48 - a * 0.56)} y2={f1(48 - b * 0.56)} />)}
        {SLOPE.map(([a, b], i) => <g key={i} className={c.slopeDots} data-on={i === k}><circle cx="20" cy={f1(48 - a * 0.56)} r="1.5" /><circle cx="80" cy={f1(48 - b * 0.56)} r="1.5" /></g>)}
      </svg>
      <span className={c.out}>Line <b>{k + 1}</b> · {SLOPE[k][0]} → {SLOPE[k][1]}</span>
    </button>
  );
}
