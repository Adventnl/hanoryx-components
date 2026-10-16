import { useState } from 'react';
import { useTick } from '../../stage/hooks';
import c from './checkout.module.css';
import { Co } from './shared';

/* 32 */ export function PayButton() {
  const [s, setS] = useState('idle');
  const n = useTick(700);
  const [t0, setT0] = useState(0);
  const st = s === 'busy' && n - t0 >= 2 ? 'done' : s;
  return (
    <Co label="Pay button" className={c.center}>
      <button type="button" className={c.payBig} data-s={st} aria-busy={st === 'busy'} onClick={() => { if (st === 'done') setS('idle'); else { setS('busy'); setT0(n); } }}>{st === 'idle' ? 'Pay $120' : st === 'busy' ? <i className={c.spin} /> : '✓ Paid'}</button>
    </Co>
  );
}
