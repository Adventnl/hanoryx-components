import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './menus.module.css';
import { roving, useOpen } from './shared';

/* 2 */ export function SelectMenu() {
  const [open, setOpen, ref] = useOpen();
  const [v, setV] = useState('Medium');
  return (
    <div ref={ref} className={c.dd}>
      <button type="button" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(!open)}>{v} <Ico n="down" /></button>
      {open && <ul role="listbox" aria-label="Size" onKeyDown={roving}>{['Small', 'Medium', 'Large'].map((t) => <li key={t} role="none"><button type="button" role="option" aria-selected={t === v} onClick={() => { setV(t); setOpen(false); }}>{t}{t === v && <Ico n="check" />}</button></li>)}</ul>}
    </div>
  );
}
