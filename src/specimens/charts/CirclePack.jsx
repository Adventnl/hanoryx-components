import { useState } from 'react';
import c from './charts.module.css';

/* 41 */ const PACK = [['Core', 24, 31, 22], ['Edge', 64, 24, 17], ['Mail', 86, 42, 11], ['Docs', 50, 52, 11], ['Logs', 12, 57, 5], ['Tmp', 72, 55, 8], ['Misc', 92, 14, 7]];

export function CirclePack() {
  const [hot, setHot] = useState(-1);
  return (
    <div className={c.pack} data-hot={hot}>
      {PACK.map(([n, x, y, r], i) => (
        <button key={n} type="button" data-hot={hot === i} aria-label={`${n}, size ${r}`} style={{ '--cx': x, '--cy': y, '--r': r }} onPointerEnter={() => setHot(i)} onPointerLeave={() => setHot(-1)} onFocus={() => setHot(i)} onBlur={() => setHot(-1)} onClick={() => setHot(i)}>
          {r > 8 && <span>{n}</span>}
        </button>
      ))}
    </div>
  );
}
