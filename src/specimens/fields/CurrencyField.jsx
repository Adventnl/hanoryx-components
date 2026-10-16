import { useState } from 'react';
import c from './fields.module.css';

/* 18 */ export function CurrencyField() {
  const [v, setV] = useState('1250');
  const shown = v ? Number(v).toLocaleString('en-US') : '';
  return <label className={c.money}><span>$</span><input value={shown} inputMode="numeric" aria-label="Amount" onChange={(e) => setV(e.target.value.replace(/\D/g, '').slice(0, 9))} /><em>USD</em></label>;
}
