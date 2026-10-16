import { useState } from 'react';
import c from './dials.module.css';

/* 38 */ export function Thumbscrew() {
  const [on, setOn] = useState(false);
  return (
    <button type="button" className={c.thumb} aria-pressed={on} aria-label="Thumbscrew" onClick={() => setOn(!on)}>
      <i /><b /><u />
    </button>
  );
}
