import { useState } from 'react';
import c from './handset.module.css';
import { Phone, cx } from './shared';

/* 23 */ export function DialPad() {
  const [d, setD] = useState('');
  return (
    <Phone label="Dial pad" className={c.between}>
      <b className={cx(c.h, c.num)}>{d || '—'}</b>
      <div className={c.pad}>{'123456789*0#'.split('').map((k) => <button key={k} type="button" onClick={() => setD((x) => (x + k).slice(-9))}>{k}</button>)}</div>
      <button type="button" className={c.ghost} onClick={() => setD('')}>Clear</button>
    </Phone>
  );
}
