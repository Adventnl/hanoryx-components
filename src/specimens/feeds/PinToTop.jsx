import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './feeds.module.css';
import { Fd } from './shared';

/* 10 */ export function PinToTop() {
  const [pins, setPins] = useState([2]);
  const L = ['Roadmap', 'Minutes', 'Brand kit', 'Invoices'];
  const order = [...L.keys()].sort((a, b) => Number(pins.includes(b)) - Number(pins.includes(a)) || a - b);
  return (
    <Fd label="Pin to top" className={c.list}>
      {order.map((k) => <div key={L[k]} className={c.row}><span>{L[k]}</span><button type="button" className={c.pin} aria-pressed={pins.includes(k)} aria-label={`${pins.includes(k) ? 'Unpin' : 'Pin'} ${L[k]}`} onClick={() => setPins((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]))}><Ico n="pin" /></button></div>)}
    </Fd>
  );
}
