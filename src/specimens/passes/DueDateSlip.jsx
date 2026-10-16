import { useState } from 'react';
import c from './passes.module.css';

/* 36 */
const DUE = ['03 NOV', '17 NOV', '01 DEC', '15 DEC', '29 DEC', '12 JAN'];

export function DueDateSlip() {
  const [n, setN] = useState(2);
  return (
    <div className={c.fig}>
      <div className={c.du}>
        <span className={c.duHead}><span className={c.kp}>Date due</span><span className={c.kp}>Please return</span></span>
        <span className={c.duRows}>
          {DUE.slice(0, n).map((d, i) => <span key={d} className={c.duRow} style={{ '--r': `${((i * 29) % 5) - 2}deg` }}>{d}</span>)}
        </span>
      </div>
      <p className={c.row}>
        <button type="button" className={c.btn} disabled={n >= DUE.length} onClick={() => setN((k) => k + 1)}>Renew</button>
        <button type="button" className={c.btn} onClick={() => setN(1)}>Clear</button>
      </p>
    </div>
  );
}
