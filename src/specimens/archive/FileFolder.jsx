import { useState } from 'react';
import c from './archive.module.css';

/* 03 */ export function FileFolder() {
  const [open, setOpen] = useState(false);
  return (
    <button type="button" className={c.folder} aria-pressed={open} onClick={() => setOpen((v) => !v)} aria-label="File folder. Click to open it">
      <span className={c.papers}><i /><i /><i /></span>
      <span className={c.back}><em>CASE 22</em></span>
      <span className={c.front} data-open={open} />
    </button>
  );
}
