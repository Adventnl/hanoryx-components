import { useState } from 'react';
import c from './graphs.module.css';
import { Legend } from './shared';

/* 30 */ const VENN = [['Set A', 34, 38, 20], ['Set B', 62, 38, 20], ['Set C', 48, 62, 20]];

export function VennSets() {
  const [hot, setHot] = useState(-1);
  return (
    <div className={c.col} data-hot={hot}>
      <svg className={c.svg} viewBox="0 0 100 86" aria-hidden="true">
        {VENN.map(([n, x, y, r], i) => <circle key={n} className={c.venn} data-hot={hot === i} cx={x} cy={y} r={r} />)}
        {[[24, 30, '12'], [72, 30, '9'], [48, 76, '7'], [48, 32, '4'], [36, 55, '3'], [60, 55, '5'], [48, 48, '2']].map(([x, y, t]) => <text key={`${x}${y}`} className={c.tx} x={x} y={y} textAnchor="middle">{t}</text>)}
      </svg>
      <Legend items={VENN.map(([n]) => n)} hot={hot} setHot={setHot} />
    </div>
  );
}
