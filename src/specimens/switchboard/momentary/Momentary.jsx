import { useState } from 'react';
import c from "../switchboard.module.css";

/* 21 */ export function Momentary() {
  const [on, setOn] = useState(false);
  const down = () => setOn(true);
  const up = () => setOn(false);
  return (
    <button type="button" className={c.momentary} aria-pressed={on} aria-label="Momentary, hold to run" onPointerDown={down} onPointerUp={up} onPointerLeave={up} onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') down(); }} onKeyUp={up} onBlur={up}>
      <i />{on ? 'HELD' : 'HOLD'}
    </button>
  );
}
