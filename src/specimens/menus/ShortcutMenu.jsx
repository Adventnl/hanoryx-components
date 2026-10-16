import { Ico } from '../../stage/icons';
import c from './menus.module.css';
import { roving, useOpen } from './shared';

/* 25 */ export function ShortcutMenu() {
  const [open, setOpen, ref] = useOpen();
  return (
    <div ref={ref} className={c.keys}>
      <button type="button" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}>Edit <Ico n="down" /></button>
      {open && <ul role="menu" onKeyDown={roving}>{[['Copy', '⌘C'], ['Paste', '⌘V'], ['Select all', '⌘A']].map(([t, k]) => <li key={t} role="none"><button type="button" role="menuitem" onClick={() => setOpen(false)}>{t}<kbd>{k}</kbd></button></li>)}</ul>}
    </div>
  );
}
