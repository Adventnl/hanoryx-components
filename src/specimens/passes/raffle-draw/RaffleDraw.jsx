import { useState } from 'react';
import c from "../passes.module.css";

/* 21 */
const DRAWS = [4821, 1937, 7305, 2468, 9014, 5560];

const DIGITS = Array.from({ length: 30 }, (_, i) => i % 10);

export function RaffleDraw() {
  const [k, setK] = useState(-1);
  const n = k < 0 ? 0 : DRAWS[k % DRAWS.length];
  const digits = String(n).padStart(4, '0').split('');
  return (
    <div className={c.fig}>
      <div className={c.rd} role="img" aria-label={k < 0 ? 'Raffle number not drawn yet' : `Raffle number ${String(n).padStart(4, '0')}`}>
        {digits.map((d, i) => (
          <span key={i} className={c.rdCol} style={{ '--d': Number(d) + (k % 2 ? 20 : 10), '--i': i }}>
            <span>{DIGITS.map((x, j) => <i key={j}>{x}</i>)}</span>
          </span>
        ))}
      </div>
      <p className={c.row}>
        <button type="button" className={c.btn} onClick={() => setK((x) => x + 1)}>Draw</button>
        <span className={c.k}>{k < 0 ? 'Not drawn' : `Draw ${k + 1}`}</span>
      </p>
    </div>
  );
}
