import { useState } from 'react';
import c from './checkout.module.css';
import { $, Co, cx } from './shared';

/* 18 */ export function OrderSummary() {
  const [express, setExpress] = useState(false);
  const sub = 120; const tax = sub * 0.08; const ship = express ? 12 : 0;
  return (
    <Co label="Order summary" className={c.list}>
      {[['Subtotal', sub], ['Tax (8%)', tax], ['Shipping', ship]].map(([t, v]) => <div key={t} className={c.sum}><span>{t}</span><b>{v ? $(v) : 'Free'}</b></div>)}
      <div className={cx(c.sum, c.total)}><span>Total</span><b>{$(sub + tax + ship)}</b></div>
      <button type="button" className={c.chip} aria-pressed={express} onClick={() => setExpress((v) => !v)}>Express +$12</button>
    </Co>
  );
}
