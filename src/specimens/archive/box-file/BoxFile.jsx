import { useState } from 'react';
import c from "../archive.module.css";

/* 07 */ export function BoxFile() {
  const [open, setOpen] = useState(false);
  return (
    <button type="button" className={c.boxf} aria-pressed={open} onClick={() => setOpen((v) => !v)} aria-label="Box file. Click to lift the lid">
      <span className={c.lid} data-open={open} />
      <span className={c.boxBody}><em>2026</em></span>
    </button>
  );
}
