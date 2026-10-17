import { useState } from 'react';
import c from "../checkout.module.css";
import { $, Co } from "../shared";

/* 10 */ export function CurrencySwitch() {
  const [i, setI] = useState(0);
  const C = [['USD', '$', 1], ['EUR', '€', 0.92], ['GBP', '£', 0.79]];
  return (
    <Co label="Currency" className={c.center}>
      <div className={c.seg} role="group" aria-label="Currency">{C.map(([n], k) => <button key={n} type="button" aria-pressed={i === k} onClick={() => setI(k)}>{n}</button>)}</div>
      <b className={c.big}>{$(49 * C[i][2], C[i][1])}</b>
    </Co>
  );
}
