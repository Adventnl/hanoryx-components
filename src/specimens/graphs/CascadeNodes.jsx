import { useState } from 'react';
import c from './graphs.module.css';

/* 42 */ const CASC = [[14, 20], [38, 12], [62, 22], [86, 14], [24, 48], [50, 42], [76, 50], [14, 72], [40, 70], [66, 74], [90, 66], [52, 60]];

const CASC_E = [[0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 5], [3, 6], [4, 5], [5, 6], [4, 7], [4, 8], [5, 11], [6, 10], [8, 11], [9, 11], [9, 10], [8, 9], [11, 6]];

export function CascadeNodes() {
  const [origin, setOrigin] = useState(5);
  const [run, setRun] = useState(0);
  const dist = { [origin]: 0 };
  const q = [origin];
  while (q.length) { const v = q.shift(); CASC_E.forEach(([a, b]) => { const w = a === v ? b : b === v ? a : -1; if (w >= 0 && !(w in dist)) { dist[w] = dist[v] + 1; q.push(w); } }); }
  return (
    <div className={c.fig}>
      <div className={c.cascBox}>
        <svg className={c.svg} viewBox="0 0 100 86" aria-hidden="true">
          {CASC_E.map(([a, b], i) => <line key={i} className={c.edge} x1={CASC[a][0]} y1={CASC[a][1]} x2={CASC[b][0]} y2={CASC[b][1]} />)}
        </svg>
        {CASC.map(([x, y], i) => (
          <button key={`${i}-${run}`} type="button" className={c.casc} data-origin={i === origin} style={{ left: `${x}%`, top: `${(y / 86) * 100}%`, '--d': dist[i] }} aria-label={`Node ${i + 1}, click to start a cascade from here`} onClick={() => { setOrigin(i); setRun(run + 1); }} />
        ))}
      </div>
    </div>
  );
}
