import { useState } from 'react';
import c from "../graphs.module.css";

/* 20 */ const HEAP_IN = [42, 17, 63, 8, 25, 51, 4, 36];

const heapPush = (h, v) => { const a = [...h, v]; let i = a.length - 1; while (i > 0 && a[(i - 1) >> 1] > a[i]) { const p = (i - 1) >> 1; [a[p], a[i]] = [a[i], a[p]]; i = p; } return a; };

const heapPop = (h) => {
  if (h.length < 2) return [];
  const a = [h[h.length - 1], ...h.slice(1, -1)];
  let i = 0;
  for (;;) { const l = 2 * i + 1; const r = l + 1; let m = i; if (l < a.length && a[l] < a[m]) m = l; if (r < a.length && a[r] < a[m]) m = r; if (m === i) break; [a[m], a[i]] = [a[i], a[m]]; i = m; }
  return a;
};

export function HeapTree() {
  const [h, setH] = useState(() => [42, 17, 63].reduce(heapPush, []));
  const [k, setK] = useState(3);
  const pos = (i) => { const d = Math.floor(Math.log2(i + 1)); return [((i + 1 - 2 ** d + 0.5) / 2 ** d) * 100, 10 + d * 24]; };
  return (
    <div className={c.col}>
      <svg className={c.svg} viewBox="0 0 100 66" aria-hidden="true">
        {h.map((_, i) => (i ? (() => { const [x1, y1] = pos((i - 1) >> 1); const [x2, y2] = pos(i); return <line key={`e${i}`} className={c.edge} x1={x1} y1={y1} x2={x2} y2={y2} />; })() : null))}
        {h.map((v, i) => { const [x, y] = pos(i); return <g key={i} className={c.box} data-hot={i === 0}><circle cx={x} cy={y} r="4.6" /><text x={x} y={y} textAnchor="middle" dominantBaseline="central">{v}</text></g>; })}
      </svg>
      <p className={c.sub}>[{h.join(', ')}]</p>
      <div className={c.pair}>
        <button type="button" onClick={() => { setH((a) => heapPush(a, HEAP_IN[k % HEAP_IN.length] + (Math.floor(k / HEAP_IN.length) % 5))); setK(k + 1); }}>Insert</button>
        <button type="button" onClick={() => setH(heapPop)}>Take smallest</button>
      </div>
    </div>
  );
}
