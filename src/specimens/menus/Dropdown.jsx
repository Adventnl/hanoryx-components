import { Ico } from '../../stage/icons';
import c from './menus.module.css';
import { roving, useOpen } from './shared';

const ITEMS = ['Rename', 'Duplicate', 'Archive', 'Delete'];

/* 1 */ export function Dropdown() {
  const [open, setOpen, ref] = useOpen();
  return (
    <div ref={ref} className={c.dd}>
      <button type="button" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}>Actions <Ico n="down" /></button>
      {open && <ul role="menu" onKeyDown={roving}>{ITEMS.map((t) => <li key={t} role="none"><button type="button" role="menuitem" onClick={() => setOpen(false)}>{t}</button></li>)}</ul>}
    </div>
  );
}
