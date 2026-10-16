import { useState } from 'react';
import c from './steps.module.css';

/* 9 */ export function PillTrail() {
  const [k, setK] = useState(2);
  const t = ['Shop', 'Shoes', 'Boots', 'Chelsea'];
  return (
    <nav className={c.pills} aria-label="Pill trail">
      {t.map((n, i) => <button key={n} type="button" data-on={i === k} aria-current={i === k ? 'page' : undefined} onClick={() => setK(i)}>{n}</button>)}
    </nav>
  );
}
