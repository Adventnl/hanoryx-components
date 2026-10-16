import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './checkout.module.css';
import { Co } from './shared';

/* 16 */ export function MiniCart() {
  const [n, setN] = useState(2);
  return (
    <Co label="Mini cart" className={c.center}>
      <button type="button" className={c.cartBtn} aria-label={`Cart, ${n} items. Add another`} onClick={() => setN((v) => v + 1)}><Ico n="cart" />{n > 0 && <em key={n}>{n}</em>}</button>
      <button type="button" className={c.chip} onClick={() => setN(0)}>Empty cart</button>
    </Co>
  );
}
