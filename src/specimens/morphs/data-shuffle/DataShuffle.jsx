import { useState } from 'react';
import c from "../morphs.module.css";
import { useTween } from "../shared";

const DATA = [[0.4, 0.7, 0.5, 0.9, 0.6, 0.3, 0.8], [0.9, 0.5, 0.8, 0.3, 0.7, 0.6, 0.4], [0.3, 0.3, 0.9, 0.9, 0.3, 0.9, 0.5]];

/* 22 */ export function DataShuffle() {
  const [i, setI] = useState(0);
  const v = useTween(DATA[i], 600);
  return (
    <button type="button" className={c.svgBtn} onClick={() => setI((x) => (x + 1) % 3)} aria-label="Bars and line. Click to shuffle the data">
      <svg viewBox="0 0 110 64">
        {v.map((h, k) => <rect key={k} x={8 + k * 14} y={58 - h * 48} width="9" height={h * 48} rx="1.5" className={c.bar} />)}
        <path d={v.map((h, k) => `${k ? 'L' : 'M'}${12.5 + k * 14} ${58 - h * 48}`).join('')} className={c.ln} />
      </svg>
    </button>
  );
}
