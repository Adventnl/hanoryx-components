import { useState } from 'react';
import c from './checkout.module.css';
import { Co } from './shared';

/* 37 */ export function OrderTracker() {
  const [s, setS] = useState(1);
  const T = ['Packed', 'Shipped', 'Out for delivery', 'Delivered'];
  return (
    <Co label="Order tracker" className={c.list}>
      <ol className={c.track}>{T.map((t, k) => <li key={t} data-done={k <= s}><i />{t}</li>)}</ol>
      <button type="button" className={c.chip} onClick={() => setS((v) => (v + 1) % 4)}>Next update</button>
    </Co>
  );
}
