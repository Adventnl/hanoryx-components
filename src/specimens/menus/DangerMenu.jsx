import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './menus.module.css';
import { useOpen } from './shared';

/* 38 */ export function DangerMenu() {
  const [open, setOpen, ref] = useOpen();
  const [sure, setSure] = useState(false);
  return (
    <div ref={ref} className={c.danger}>
      <button type="button" aria-haspopup="menu" aria-expanded={open} onClick={() => { setOpen(!open); setSure(false); }}>Project <Ico n="down" /></button>
      {open && <ul role="menu"><li role="none"><button type="button" role="menuitem">Rename</button></li><li role="none"><button type="button" role="menuitem" data-bad onClick={() => (sure ? (setOpen(false), setSure(false)) : setSure(true))}>{sure ? 'Really delete?' : 'Delete'}</button></li></ul>}
    </div>
  );
}
