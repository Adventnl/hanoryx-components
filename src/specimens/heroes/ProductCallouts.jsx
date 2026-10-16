import { useState } from 'react';
import c from './heroes.module.css';
import { Sc } from './shared';

/* 17 */ export function ProductCallouts() {
  const [s, setS] = useState(0);
  const N = ['Aluminium body', 'Two-day battery', 'Open firmware'];
  return <Sc label="Product callouts" className={c.callout}><span className={c.prod} />{N.map((t, k) => <button key={t} type="button" aria-pressed={s === k} aria-label={t} style={{ '--k': k }} onClick={() => setS(k)}>{k + 1}</button>)}<small>{N[s]}</small></Sc>;
}
