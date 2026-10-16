import { useState } from 'react';
import c from './steps.module.css';

/* 8 */ export function CollapsingCrumbs() {
  const [open, setOpen] = useState(false);
  const all = ['Home', 'Library', 'Data', 'Archive', 'Reports'];
  const shown = open ? all : [all[0], '…', ...all.slice(-2)];
  return (
    <nav className={c.slash} aria-label="Collapsing breadcrumb">
      {shown.map((t, k) => (
        <span key={t + k} className={c.crumbItem}>
          {k > 0 && <span>/</span>}
          {t === '…' ? <button type="button" aria-label="Show all levels" onClick={() => setOpen(true)}>…</button> : k === shown.length - 1 ? <b aria-current="page">{t}</b> : <a href="#c" onClick={(e) => e.preventDefault()}>{t}</a>}
        </span>
      ))}
    </nav>
  );
}
