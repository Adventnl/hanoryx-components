import { useState } from 'react';
import c from './switchboard.module.css';

/* 13 */ export function Jumper() {
  const [pos, setPos] = useState(0);
  return (
    <button type="button" className={c.jumper} data-p={pos} aria-label="Jumper, move to the other pair" onClick={() => setPos(1 - pos)}>
      <u /><u /><u /><s />
    </button>
  );
}
