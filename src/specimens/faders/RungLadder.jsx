import { useState } from 'react';
import c from './faders.module.css';

/* 16 */ export function RungLadder() {
  const [n, setN] = useState(3);
  return (
    <div className={c.ladder} role="group" aria-label="Ladder">
      {Array.from({ length: 8 }, (_, i) => <button type="button" key={i} aria-label={`Rung ${8 - i}`} aria-pressed={8 - i === n} data-below={8 - i < n} onClick={() => setN(8 - i)} />)}
    </div>
  );
}
