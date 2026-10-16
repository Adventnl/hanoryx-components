import { useState } from 'react';
import c from './menus.module.css';
import { roving, useOpen } from './shared';

/* 34 */ export function LanguageMenu() {
  const [open, setOpen, ref] = useOpen();
  const [v, setV] = useState('EN');
  return (
    <div ref={ref} className={c.lang}>
      <button type="button" aria-haspopup="listbox" aria-expanded={open} aria-label={`Language ${v}`} onClick={() => setOpen(!open)}>{v}</button>
      {open && <ul role="listbox" aria-label="Language" onKeyDown={roving}>{[['EN', 'English'], ['DE', 'Deutsch'], ['FR', 'Français'], ['ES', 'Español']].map(([k, t]) => <li key={k} role="none"><button type="button" role="option" aria-selected={k === v} onClick={() => { setV(k); setOpen(false); }}><b>{k}</b>{t}</button></li>)}</ul>}
    </div>
  );
}
