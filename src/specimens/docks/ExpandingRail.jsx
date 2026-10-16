import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './docks.module.css';

/* 7 */ export function ExpandingRail() {
  const [open, setOpen] = useState(false);
  const rows = [['home', 'Home'], ['folder', 'Files'], ['gear', 'Settings']];
  return (
    <nav className={c.expand} data-open={open} aria-label="Expanding rail">
      <button type="button" aria-expanded={open} aria-label={open ? 'Collapse rail' : 'Expand rail'} onClick={() => setOpen(!open)}><Ico n={open ? 'left' : 'right'} /></button>
      {rows.map(([n, t]) => <a key={n} href="#expanding" onClick={(e) => e.preventDefault()}><Ico n={n} /><span>{t}</span></a>)}
    </nav>
  );
}
