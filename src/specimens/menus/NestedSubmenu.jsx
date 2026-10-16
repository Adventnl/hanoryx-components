import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './menus.module.css';
import { useOpen } from './shared';

/* 7 */ export function NestedSubmenu() {
  const [open, setOpen, ref] = useOpen();
  const [sub, setSub] = useState(-1);
  const subs = [['Export', ['PDF', 'PNG', 'SVG']], ['Share', ['Link', 'Email']]];
  return (
    <div ref={ref} className={c.sub}>
      <button type="button" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}>File <Ico n="down" /></button>
      {open && (
        <ul role="menu">
          {subs.map(([t, kids], i) => (
            <li key={t} role="none" onPointerEnter={() => setSub(i)} onPointerLeave={() => setSub(-1)}>
              <button type="button" role="menuitem" aria-haspopup="menu" aria-expanded={sub === i} onClick={() => setSub(sub === i ? -1 : i)} onFocus={() => setSub(i)}>{t}<Ico n="right" /></button>
              {sub === i && <ul role="menu">{kids.map((k) => <li key={k} role="none"><button type="button" role="menuitem" onClick={() => setOpen(false)}>{k}</button></li>)}</ul>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
