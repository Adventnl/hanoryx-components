import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 14 */ export function HourSlots() {
  const [on, setOn] = useState([1, 4]);
  const flip = (k) => setOn((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]));
  return (
    <Bd label="Day hours" className={c.hours}>
      {[9, 10, 11, 12, 13, 14].map((h, k) => <button key={h} type="button" aria-pressed={on.includes(k)} aria-label={`${h}:00`} onClick={() => flip(k)}><small>{h}:00</small><i>{on.includes(k) ? 'Booked' : ''}</i></button>)}
    </Bd>
  );
}
