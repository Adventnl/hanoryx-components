import { useState } from 'react';
import c from "../charts.module.css";
import { Legend, curve, f1 } from "../shared";

/* 25 */ const BUMP = [[1, 2, 2, 3, 4, 3], [2, 1, 3, 2, 1, 1], [3, 3, 1, 1, 2, 2], [4, 4, 4, 5, 3, 4], [5, 5, 5, 4, 5, 5]];

const BUMP_NAMES = ['Ash', 'Birch', 'Cedar', 'Dune', 'Elm'];

const BUMP_P = BUMP.map((row) => row.map((r, j) => [f1(8 + j * 17.6), f1(5 + (r - 1) * 10.5)]));

export function BumpLines() {
  const [hot, setHot] = useState(1);
  return (
    <div className={c.bump}>
      <svg viewBox="0 0 100 52" aria-hidden="true">
        {BUMP_P.map((p, k) => <g key={k} className={c.bumpLine} data-hot={hot === k}><path d={curve(p)} />{p.map(([x, y], j) => <circle key={j} cx={x} cy={y} r="1.5" />)}</g>)}
      </svg>
      <Legend items={BUMP_NAMES.map((n) => [n])} hot={hot} setHot={setHot} sticky />
    </div>
  );
}
