import { useState } from 'react';
import c from './handset.module.css';
import { Phone, Sw } from './shared';

/* 10 */ export function ReminderOptIn() {
  const [on, setOn] = useState(true);
  const [t, setT] = useState(1);
  return (
    <Phone label="Reminder opt-in">
      <div className={c.row}><b className={c.h}>Daily nudge</b><Sw on={on} set={setOn} label="Daily nudge" /></div>
      <div className={c.chips} role="group" aria-label="Time">{['8:00', '12:30', '18:00'].map((x, k) => <button key={x} type="button" className={c.chip} disabled={!on} aria-pressed={t === k} onClick={() => setT(k)}>{x}</button>)}</div>
      <span className={c.p}>{on ? `At ${['8:00', '12:30', '18:00'][t]}` : 'Off'}</span>
    </Phone>
  );
}
