import { useState } from 'react';
import c from "../checkout.module.css";
import { $, Co } from "../shared";

/* 21 */ export function UpsellStrip() {
  const [on, setOn] = useState([]);
  const U = [['Waterproof bag', 14], ['Spare laces', 4]];
  return (
    <Co label="Add this too" className={c.list}>
      <small className={c.m}>Goes well with</small>
      {U.map(([t, p], k) => <div key={t} className={c.line}><span>{t}<small>{$(p)}</small></span><button type="button" className={c.chip} aria-pressed={on.includes(k)} onClick={() => setOn((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]))}>{on.includes(k) ? 'Added' : 'Add'}</button></div>)}
      <div className={c.sum}><span>Extras</span><b>{$(on.reduce((s, k) => s + U[k][1], 0))}</b></div>
    </Co>
  );
}
