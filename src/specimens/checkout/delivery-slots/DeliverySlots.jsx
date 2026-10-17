import { useState } from 'react';
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 38 */ export function DeliverySlots() {
  const [s, setS] = useState(1);
  const T = ['Mon 9–12', 'Mon 12–15', 'Tue 9–12', 'Tue 15–18'];
  return <Co label="Delivery slots" className={c.center}><div className={c.chips} role="radiogroup" aria-label="Slot">{T.map((t, k) => <button key={t} type="button" role="radio" aria-checked={s === k} className={c.chip} aria-pressed={s === k} onClick={() => setS(k)}>{t}</button>)}</div><small className={c.m}>Arrives {T[s]}</small></Co>;
}
