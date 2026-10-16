import { useState } from 'react';
import c from './tabs.module.css';

/* 34 */ export function OverflowMenu() {
  const all = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'];
  const [k, setK] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <div className={c.overflow}>
      <div>
        <div role="tablist" aria-label="Tabs with overflow">
          {all.slice(0, 3).map((t, i) => <button key={t} type="button" role="tab" aria-selected={i === k} onClick={() => { setK(i); setOpen(false); }}>{t}</button>)}
        </div>
        <button type="button" aria-haspopup="true" aria-expanded={open} aria-label="More tabs" onClick={() => setOpen(!open)}>•••</button>
      </div>
      {open && <ul>{all.slice(3).map((t, j) => <li key={t}><button type="button" onClick={() => { setK(j + 3); setOpen(false); }}>{t}</button></li>)}</ul>}
      <output>Showing {all[k]}</output>
    </div>
  );
}
