import { useState } from 'react';
import c from './checkout.module.css';
import { Co } from './shared';

/* 22 */ export function GiftWrap() {
  const [on, setOn] = useState(false);
  const [note, setNote] = useState('');
  return (
    <Co label="Gift options" className={c.list}>
      <div className={c.line}><span>Gift wrap <small>+$4</small></span><button type="button" role="switch" aria-checked={on} aria-label="Gift wrap" className={c.sw} onClick={() => setOn((v) => !v)}><i /></button></div>
      {on && <label className={c.field}><input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note" aria-label="Gift note" maxLength={40} /></label>}
      <div className={c.sum}><span>Total</span><b>{on ? '$124' : '$120'}</b></div>
    </Co>
  );
}
