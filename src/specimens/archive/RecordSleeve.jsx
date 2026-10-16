import { useState } from 'react';
import c from './archive.module.css';

/* 20 */ export function RecordSleeve() {
  const [out, setOut] = useState(false);
  return (
    <button type="button" className={c.sleeve} aria-pressed={out} onClick={() => setOut((v) => !v)} aria-label="Record sleeve. Click to slide the record out">
      <i className={c.disc} data-out={out} />
      <span className={c.cover}><b>VOL. 3</b></span>
    </button>
  );
}
