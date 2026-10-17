import { useState } from 'react';
import c from "../charts.module.css";
import { Legend, polar } from "../shared";

/* 6 */ const PIE = [['Mon', 24], ['Tue', 18], ['Wed', 22], ['Thu', 16], ['Fri', 20]];

const PIE_ARCS = (() => {
  let a = 0;
  return PIE.map(([, v]) => {
    const from = a * 3.6;
    a += v;
    const to = a * 3.6;
    const mid = (((from + to) / 2) * Math.PI) / 180;
    return { from, to, dx: +Math.sin(mid).toFixed(2), dy: +(-Math.cos(mid)).toFixed(2) };
  });
})();

export function PullOutPie() {
  const [k, setK] = useState(2);
  return (
    <div className={c.pie}>
      <svg viewBox="-6 -6 112 112" aria-hidden="true">
        {PIE_ARCS.map((a, i) => (
          <path key={i} className={c.wedge} data-on={k === i} style={{ '--k': i, '--dx': a.dx, '--dy': a.dy }} d={`M50 50L${polar(50, 50, 44, a.from).join(' ')}A44 44 0 ${a.to - a.from > 180 ? 1 : 0} 1 ${polar(50, 50, 44, a.to).join(' ')}Z`} onClick={() => setK(i)} />
        ))}
      </svg>
      <Legend items={PIE} hot={k} setHot={setK} sticky unit="%" />
    </div>
  );
}
