import { useState } from 'react';
import c from './signals.module.css';

/* 35 */ export function StatusChip() {
  const [open, setOpen] = useState(false);
  return (
    <div className={c.chip}>
      <button type="button" aria-describedby="chip-tip" onPointerEnter={() => setOpen(true)} onPointerLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}><i />Degraded</button>
      <span id="chip-tip" role="tooltip" data-open={open}>Search is slow. Since 14:02</span>
    </div>
  );
}
