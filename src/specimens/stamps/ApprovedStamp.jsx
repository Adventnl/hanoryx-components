import { useState } from 'react';
import c from './stamps.module.css';
import { tilt } from './shared';

/* 01 */ export function ApprovedStamp() {
  const [n, setN] = useState(1);
  return (
    <button type="button" className={c.press} onClick={() => setN((v) => v + 1)} aria-label="Stamp APPROVED. Click to stamp again">
      <span className={c.sheet}><i /><i /><i /></span>
      <b key={n} className={c.mark} style={{ '--r': tilt(n, 8) }}>APPROVED</b>
    </button>
  );
}
