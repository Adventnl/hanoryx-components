import { useState } from 'react';
import c from './menus.module.css';
import { useOpen } from './shared';

/* 18 */ export function Menubar() {
  const [open, setOpen, ref] = useOpen();
  const [k, setK] = useState(-1);
  const bar = [['File', ['New', 'Open', 'Save']], ['Edit', ['Undo', 'Redo']], ['View', ['Zoom in', 'Zoom out']]];
  return (
    <div ref={ref} className={c.mbar}>
      <div role="menubar" aria-label="Menubar" onKeyDown={(e) => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); const next = (k + (e.key === 'ArrowRight' ? 1 : 2)) % 3; setK(next); setOpen(true); e.currentTarget.querySelectorAll('[role="menuitem"]')[next]?.focus(); } }}>
        {bar.map(([t], i) => <button key={t} type="button" role="menuitem" aria-haspopup="menu" aria-expanded={open && k === i} onClick={() => { setK(i); setOpen(!(open && k === i)); }} onPointerEnter={() => open && setK(i)}>{t}</button>)}
      </div>
      {open && k >= 0 && <ul role="menu" style={{ left: `${k * 3.6}rem` }}>{bar[k][1].map((t) => <li key={t} role="none"><button type="button" role="menuitem" onClick={() => setOpen(false)}>{t}</button></li>)}</ul>}
    </div>
  );
}
