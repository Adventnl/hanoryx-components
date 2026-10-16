import { Ico } from '../../stage/icons';
import c from './menus.module.css';
import { roving, useOpen } from './shared';

/* 24 */ export function Dropup() {
  const [open, setOpen, ref] = useOpen();
  return (
    <div ref={ref} className={c.up}>
      <button type="button" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}>Insert <Ico n="up" /></button>
      {open && <ul role="menu" onKeyDown={roving}>{['Image', 'Table', 'Chart'].map((t) => <li key={t} role="none"><button type="button" role="menuitem" onClick={() => setOpen(false)}>{t}</button></li>)}</ul>}
    </div>
  );
}
