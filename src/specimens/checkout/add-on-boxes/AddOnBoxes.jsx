import { useState } from 'react';
import c from "../checkout.module.css";
import { $, Co } from "../shared";

/* 08 */ export function AddOnBoxes() {
  const [on, setOn] = useState([0]);
  const A = [['Priority support', 15], ['Extra storage', 8], ['Audit log', 12]];
  const tot = 29 + on.reduce((s, k) => s + A[k][1], 0);
  return (
    <Co label="Add-ons" className={c.list}>
      {A.map(([t, p], k) => <button key={t} type="button" role="checkbox" aria-checked={on.includes(k)} className={c.line} onClick={() => setOn((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]))}><i>{on.includes(k) ? '✓' : ''}</i><span>{t}</span><em>+{$(p)}</em></button>)}
      <div className={c.sum}><span>Total</span><b>{$(tot)}</b></div>
    </Co>
  );
}
