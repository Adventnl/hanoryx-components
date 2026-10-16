import { useState } from 'react';
import c from './charts.module.css';
import { Legend, f1, poly, series } from './shared';

/* 33 */ const PAR = Array.from({ length: 5 }, (_, k) => series(5, 171 + k, 0.1, 0.95).map((v, j) => [f1(8 + j * 21), f1(46 - v * 40)]));

const PAR_NAMES = ['Line A', 'Line B', 'Line C', 'Line D', 'Line E'];

export function ParallelLines() {
  const [hot, setHot] = useState(-1);
  return (
    <div className={c.par} data-hot={hot}>
      <svg viewBox="0 0 100 52" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((j) => <line key={j} className={c.axis} x1={8 + j * 21} x2={8 + j * 21} y1="4" y2="48" />)}
        {PAR.map((p, k) => <path key={k} className={c.parLine} data-hot={hot === k} d={poly(p)} />)}
      </svg>
      <Legend items={PAR_NAMES.map((n) => [n])} hot={hot} setHot={setHot} />
    </div>
  );
}
