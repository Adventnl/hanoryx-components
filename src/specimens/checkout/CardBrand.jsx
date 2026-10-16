import { useState } from 'react';
import c from './checkout.module.css';
import { Co, group } from './shared';

/* 28 */ export function CardBrand() {
  const [v, setV] = useState('4');
  const b = v.startsWith('4') ? 'Visa' : v.startsWith('5') ? 'Mastercard' : v.startsWith('3') ? 'Amex' : '—';
  return (
    <Co label="Card brand" className={c.list}>
      <label className={c.field}><input value={v} onChange={(e) => setV(group(e.target.value))} inputMode="numeric" placeholder="Start typing" aria-label="Card number" autoComplete="off" /></label>
      <span className={c.brand} data-b={b}>{b}</span>
    </Co>
  );
}
