import { useState } from 'react';
import c from './charts.module.css';
import { Legend, sector } from './shared';

/* 14 */ const SUN = [['Apps', [14, 11, 9]], ['Docs', [12, 8]], ['Media', [16, 10, 6]], ['Other', [9, 5]]];

const SUN_ARCS = (() => {
  let a = 0;
  const cats = [];
  const kids = [];
  SUN.forEach(([n, ch], ci) => {
    const from = a;
    ch.forEach((v) => { kids.push({ ci, from: a * 3.6 + 0.6, to: (a + v) * 3.6 - 0.6 }); a += v; });
    cats.push({ n, from: from * 3.6 + 0.6, to: a * 3.6 - 0.6, v: a - from });
  });
  return { cats, kids };
})();

export function Sunburst() {
  const [hot, setHot] = useState(-1);
  return (
    <div className={c.sun} data-hot={hot}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        {SUN_ARCS.cats.map((a, i) => <path key={a.n} data-hot={hot === i} style={{ '--k': i }} d={sector(50, 50, 16, 31, a.from, a.to)} onPointerEnter={() => setHot(i)} onPointerLeave={() => setHot(-1)} />)}
        {SUN_ARCS.kids.map((a, i) => <path key={i} className={c.outer} data-hot={hot === a.ci} style={{ '--k': a.ci }} d={sector(50, 50, 33, 46, a.from, a.to)} />)}
      </svg>
      <Legend items={SUN_ARCS.cats.map((a) => [a.n, a.v])} hot={hot} setHot={setHot} unit="%" />
    </div>
  );
}
