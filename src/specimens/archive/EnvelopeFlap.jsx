import { useState } from 'react';
import c from './archive.module.css';

/* 23 */ export function EnvelopeFlap() {
  const [open, setOpen] = useState(false);
  return (
    <button type="button" className={c.env} aria-pressed={open} onClick={() => setOpen((v) => !v)} aria-label="Envelope. Click to open the flap">
      <span className={c.letter} data-open={open}><i /><i /><i /></span>
      <span className={c.pocket} />
      <span className={c.flap} data-open={open} />
    </button>
  );
}
