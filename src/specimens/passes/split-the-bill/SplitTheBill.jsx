import { useState } from 'react';
import c from "../passes.module.css";

/* 20 */
const BILL = [['Noodles', 1200], ['Dumplings', 850], ['Tea', 300], ['Cake', 650]];

export function SplitTheBill() {
  const [mine, setMine] = useState([true, true, false, false]);
  const [tip, setTip] = useState(10);
  const sum = BILL.reduce((a, [, p], i) => a + (mine[i] ? p : 0), 0);
  const total = Math.round(sum * (1 + tip / 100));
  return (
    <div className={c.sb}>
      <span className={c.kp}>Table 4 · tap what you had</span>
      <span className={c.sbRows}>
        {BILL.map(([n, p], i) => (
          <button key={n} type="button" className={c.sbRow} aria-pressed={mine[i]} onClick={() => setMine((m) => m.map((x, k) => (k === i ? !x : x)))}>
            <i /><span>{n}</span><span>{(p / 100).toFixed(2)}</span>
          </button>
        ))}
      </span>
      <span className={c.sbTip}>
        <span className={c.kp}>Tip</span>
        {[0, 10, 15].map((t) => <button key={t} type="button" aria-pressed={tip === t} onClick={() => setTip(t)}>{t}%</button>)}
      </span>
      <span className={c.sbTotal}><span className={c.kp}>You pay</span><b>{(total / 100).toFixed(2)}</b></span>
    </div>
  );
}
