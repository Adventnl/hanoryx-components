import { useState } from 'react';
import c from "../menus.module.css";

/* 15 */ export function Combobox() {
  const all = ['Amber', 'Azure', 'Bronze', 'Crimson', 'Cyan', 'Indigo'];
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const shown = all.filter((t) => t.toLowerCase().startsWith(q.toLowerCase()));
  return (
    <div className={c.combo}>
      <input role="combobox" aria-expanded={open} aria-controls="combo-list" aria-autocomplete="list" aria-label="Colour" placeholder="Type A, B or C" value={q} onFocus={() => setOpen(true)} onChange={(e) => { setQ(e.target.value); setOpen(true); }} onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false); }} />
      {open && shown.length > 0 && <ul id="combo-list" role="listbox" aria-label="Colours">{shown.map((t) => <li key={t} role="option" aria-selected={false} onPointerDown={(e) => { e.preventDefault(); setQ(t); setOpen(false); }}>{t}</li>)}</ul>}
    </div>
  );
}
