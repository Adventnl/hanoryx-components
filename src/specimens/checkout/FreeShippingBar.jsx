import { useState } from 'react';
import c from './checkout.module.css';
import { $, Co } from './shared';

/* 17 */ export function FreeShippingBar() {
  const [t, setT] = useState(32);
  const left = Math.max(0, 50 - t);
  return (
    <Co label="Free shipping progress" className={c.center}>
      <span className={c.m}>{left ? `${$(left)} away from free shipping` : 'Free shipping unlocked'}</span>
      <span className={c.bar}><i style={{ width: `${Math.min(100, (t / 50) * 100)}%`, background: left ? 'var(--c-red)' : '#4ade80' }} /></span>
      <div className={c.chips}><button type="button" className={c.chip} onClick={() => setT((v) => v + 9)}>+ $9 item</button><button type="button" className={c.chip} onClick={() => setT(32)}>Reset</button></div>
    </Co>
  );
}
