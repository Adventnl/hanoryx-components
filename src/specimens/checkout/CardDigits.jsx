import { useState } from 'react';
import c from './checkout.module.css';
import { Co, group } from './shared';

/* 27 */ export function CardDigits() {
  const [v, setV] = useState('4242 4242');
  return (
    <Co label="Card number" className={c.list}>
      <span className={c.cardFace}>{v || '•••• •••• •••• ••••'}</span>
      <label className={c.field}><input value={v} onChange={(e) => setV(group(e.target.value))} inputMode="numeric" placeholder="Card number" aria-label="Card number" autoComplete="off" /></label>
      <small className={c.m}>{v.replace(/\s/g, '').length}/16 digits</small>
    </Co>
  );
}
