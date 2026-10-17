import { useState } from 'react';
import { polar } from "../../../stage/chartKit";
import c from "../graphs.module.css";

/* 10 */ export function RingNetwork() {
  const [n, setN] = useState(7);
  const p = Array.from({ length: n }, (_, i) => polar(50, 50, 40, (i / n) * 360));
  return (
    <div className={c.fig}>
      <svg className={c.svgSq} viewBox="0 0 100 100" role="img" aria-label={`${n} nodes joined to each other`}>
        {p.flatMap((a, i) => p.slice(i + 1).map((b, j) => <line key={`${i}-${j}`} className={c.edge} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />))}
        {p.map(([x, y], i) => <circle key={i} className={c.nd} cx={x} cy={y} r="2.6" />)}
      </svg>
      <div className={c.pair}>
        <button type="button" aria-label="Fewer nodes" onClick={() => setN((v) => Math.max(3, v - 1))}>−</button>
        <span className={c.sub}>{n} nodes · {(n * (n - 1)) / 2} links</span>
        <button type="button" aria-label="More nodes" onClick={() => setN((v) => Math.min(14, v + 1))}>+</button>
      </div>
    </div>
  );
}
