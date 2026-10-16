import { useState } from 'react';
import c from './feeds.module.css';
import { Fd } from './shared';

/* 33 */ export function QuietHours() {
  const [on, setOn] = useState(true);
  return (
    <Fd label="Quiet hours" className={c.list}>
      <div className={c.row}><span>Quiet hours</span><button type="button" role="switch" aria-checked={on} aria-label="Quiet hours" className={c.sw} onClick={() => setOn((v) => !v)}><i /></button></div>
      <div className={c.range} data-on={on}><span>22:00</span><i><u /></i><span>07:00</span></div>
      <small className={c.m}>{on ? 'Silent overnight' : 'Always on'}</small>
    </Fd>
  );
}
