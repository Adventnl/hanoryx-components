import { useState } from 'react';
import c from './heroes.module.css';
import { Sc } from './shared';

/* 31 */ export function PricingBand() {
  const [s, setS] = useState(1);
  return <Sc label="Pricing band" className={c.cen}><h3>Simple pricing</h3><div className={c.prices} role="group" aria-label="Plan">{[['Solo', 9], ['Team', 29], ['Scale', 99]].map(([n, p], k) => <button key={n} type="button" aria-pressed={s === k} onClick={() => setS(k)}><small>{n}</small><b>${p}</b></button>)}</div></Sc>;
}
