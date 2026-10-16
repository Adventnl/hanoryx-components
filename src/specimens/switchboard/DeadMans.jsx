import { useState } from 'react';
import c from './switchboard.module.css';

/* 36 */ export function DeadMans() {
  const [held, setHeld] = useState(false);
  return (
    <button type="button" className={c.dead} data-held={held} aria-label="Dead man's switch, hold to run" onPointerDown={() => setHeld(true)} onPointerUp={() => setHeld(false)} onPointerLeave={() => setHeld(false)} onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setHeld(true); }} onKeyUp={() => setHeld(false)} onBlur={() => setHeld(false)}>
      <i /><span>{held ? 'RUNNING' : 'HOLD TO RUN'}</span>
    </button>
  );
}
