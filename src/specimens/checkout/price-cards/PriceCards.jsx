import { useState } from 'react';
import c from "../checkout.module.css";
import { $, Co } from "../shared";

const PLANS = [['Solo', 9, 'One seat'], ['Team', 29, 'Ten seats'], ['Scale', 99, 'Unlimited']];

/* 01 */ export function PriceCards() {
  const [s, setS] = useState(1);
  return <Co label="Plans" className={c.plans}>{PLANS.map(([n, p, d], k) => <button key={n} type="button" aria-pressed={s === k} onClick={() => setS(k)}><small>{n}</small><b>{$(p)}</b><em>{d}</em></button>)}</Co>;
}
