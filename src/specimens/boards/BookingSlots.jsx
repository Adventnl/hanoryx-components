import { useState } from 'react';
import c from './boards.module.css';
import { Bd } from './shared';

/* 24 */ export function BookingSlots() {
  const [s, setS] = useState(-1);
  const T = ['9:00', '9:30', '10:00', '11:30', '13:00', '14:30'];
  return (
    <Bd label="Booking slots" className={c.center}>
      <div className={c.chips} role="group" aria-label="Times">{T.map((t, k) => <button key={t} type="button" className={c.chip} aria-pressed={s === k} disabled={k === 1} onClick={() => setS(k)}>{t}</button>)}</div>
      <small className={c.m}>{s < 0 ? 'Choose a time' : `Booked ${T[s]}`}</small>
    </Bd>
  );
}
