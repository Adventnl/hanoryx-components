import { useState } from 'react';
import c from './graphs.module.css';
import { Legend } from './shared';

/* 15 */ const LINES = [['Red line', [[8, 52], [30, 52], [48, 34], [70, 34], [92, 16]]], ['Grey line', [[10, 14], [30, 34], [48, 34], [66, 52], [90, 52]]], ['Dotted line', [[50, 8], [50, 34], [50, 62]]]];

export function TransitMap() {
  const [hot, setHot] = useState(-1);
  return (
    <div className={c.col} data-hot={hot}>
      <svg className={c.svg} viewBox="0 0 100 70" aria-hidden="true">
        {LINES.map(([name, p], i) => (
          <g key={name} className={c.tline} data-i={i} data-hot={hot === i}>
            <path d={p.map(([x, y], k) => `${k ? 'L' : 'M'}${x} ${y}`).join('')} />
            {p.map(([x, y], k) => <circle key={k} cx={x} cy={y} r="2" />)}
          </g>
        ))}
        <circle className={c.hub} cx="48" cy="34" r="3.2" />
      </svg>
      <Legend items={LINES.map(([n]) => n)} hot={hot} setHot={setHot} />
    </div>
  );
}
