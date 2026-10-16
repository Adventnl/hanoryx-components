import { useState } from 'react';
import c from './charts.module.css';

/* 13 */ const TREE = [['Apps', 38, 0, 0, 38, 60], ['Media', 27, 38, 0, 27, 60], ['Docs', 35, 65, 0, 35, 60], ['Mail', 30, 0, 60, 30, 40], ['Cache', 22, 30, 60, 22, 40], ['Logs', 28, 52, 60, 28, 40], ['Misc', 20, 80, 60, 20, 40]];

export function Treemap() {
  const [hot, setHot] = useState(-1);
  return (
    <div className={c.tree} data-hot={hot}>
      {TREE.map(([n, v, x, y, w, h], i) => (
        <button key={n} type="button" data-hot={hot === i} style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${h}%`, '--k': i }} aria-label={`${n} ${v}`} onPointerEnter={() => setHot(i)} onPointerLeave={() => setHot(-1)} onFocus={() => setHot(i)} onBlur={() => setHot(-1)} onClick={() => setHot(i)}>
          <span>{n}</span><em>{v}</em>
        </button>
      ))}
    </div>
  );
}
