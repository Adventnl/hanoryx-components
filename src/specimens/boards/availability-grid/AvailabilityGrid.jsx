import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 22 */ export function AvailabilityGrid() {
  const [on, setOn] = useState(['0-1', '1-2', '2-2', '3-3']);
  const flip = (id) => setOn((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));
  return (
    <Bd label="Availability grid" className={c.center}>
      <div className={c.avail}>{Array.from({ length: 30 }, (_, k) => { const id = `${k % 5}-${Math.floor(k / 5)}`; return <button key={id} type="button" aria-pressed={on.includes(id)} aria-label={`Day ${(k % 5) + 1}, slot ${Math.floor(k / 5) + 1}`} onClick={() => flip(id)} />; })}</div>
      <small className={c.m}>{on.length} slots free</small>
    </Bd>
  );
}
