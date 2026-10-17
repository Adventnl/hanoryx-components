import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../docks.module.css";

/* 5 */ export function CommandBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className={c.command}>
      <button type="button" aria-expanded={open} aria-label="Command bar" onClick={() => setOpen(!open)}><Ico n="search" /><span>Search or jump to…</span><kbd>⌘K</kbd></button>
      {open && <ul>{['Open file', 'Run task', 'Go to line'].map((t) => <li key={t}>{t}</li>)}</ul>}
    </div>
  );
}
