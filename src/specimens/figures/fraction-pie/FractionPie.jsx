import { useState } from 'react';
import c from "../figures.module.css";

/* 20 */ const FRACS = [[1, 2], [1, 3], [2, 3], [3, 4], [5, 6], [7, 8]];

export function FractionPie() {
  const [k, setK] = useState(3);
  const [n, d] = FRACS[k];
  return (
    <button type="button" className={c.frac} style={{ '--fn': n, '--fd': d }} aria-label={`Fraction ${n} over ${d}. Click for another`} onClick={() => setK((k + 1) % FRACS.length)}>
      <span className={c.pie}><i /></span>
      <span className={c.fraction}><b>{n}</b><u /><b>{d}</b></span>
    </button>
  );
}
