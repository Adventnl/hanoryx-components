import { useState } from 'react';
import c from './checkout.module.css';
import { $, Co } from './shared';

/* 23 */ export function DeliveryChoice() {
  const [s, setS] = useState(0);
  const D = [['Standard', '3–5 days', 0], ['Express', '1–2 days', 12], ['Pickup', 'Today', 0]];
  return <Co label="Delivery" className={c.list}><div role="radiogroup" aria-label="Delivery">{D.map(([t, d, p], k) => <button key={t} type="button" role="radio" aria-checked={s === k} className={c.line} onClick={() => setS(k)}><i className={c.radio} data-on={s === k} /><span>{t}<small>{d}</small></span><em>{p ? $(p) : 'Free'}</em></button>)}</div></Co>;
}
