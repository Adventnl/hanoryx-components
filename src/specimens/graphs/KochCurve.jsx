import { useState } from 'react';
import { f1 } from '../../stage/chartKit';
import c from './graphs.module.css';

/* 39 */ const koch = (level) => {
  let pts = [[4, 70], [96, 70]];
  for (let n = 0; n < level; n += 1) {
    const out = [];
    pts.forEach((p, i) => {
      if (i === pts.length - 1) { out.push(p); return; }
      const q = pts[i + 1];
      const dx = (q[0] - p[0]) / 3;
      const dy = (q[1] - p[1]) / 3;
      const a = [p[0] + dx, p[1] + dy];
      const b = [p[0] + 2 * dx, p[1] + 2 * dy];
      const peak = [a[0] + dx * 0.5 + dy * 0.866, a[1] + dy * 0.5 - dx * 0.866];
      out.push(p, a, peak, b);
    });
    pts = out;
  }
  return pts;
};

export function KochCurve() {
  const [level, setLevel] = useState(3);
  const p = koch(level);
  return (
    <button type="button" className={c.chBtn} aria-label={`Koch curve at level ${level}. Click for the next level`} onClick={() => setLevel((v) => (v + 1) % 6)}>
      <svg className={c.svg} viewBox="0 0 100 80" aria-hidden="true"><path className={c.fractal} d={p.map(([x, y], i) => `${i ? 'L' : 'M'}${f1(x)} ${f1(y)}`).join('')} /></svg>
      <span className={c.sub}>level <b>{level}</b> · {4 ** level} segments</span>
    </button>
  );
}
