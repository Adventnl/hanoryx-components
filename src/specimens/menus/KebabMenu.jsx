import c from './menus.module.css';
import { roving, useOpen } from './shared';

/* 10 */ export function KebabMenu() {
  const [open, setOpen, ref] = useOpen();
  return (
    <div ref={ref} className={c.kebab}>
      <button type="button" aria-label="More options" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /><i /></button>
      {open && <ul role="menu" onKeyDown={roving}>{['Edit', 'Move', 'Remove'].map((t) => <li key={t} role="none"><button type="button" role="menuitem" onClick={() => setOpen(false)}>{t}</button></li>)}</ul>}
    </div>
  );
}
