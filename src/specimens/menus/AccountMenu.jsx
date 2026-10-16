import { Ico } from '../../stage/icons';
import c from './menus.module.css';
import { roving, useOpen } from './shared';

/* 13 */ export function AccountMenu() {
  const [open, setOpen, ref] = useOpen();
  return (
    <div ref={ref} className={c.user}>
      <button type="button" aria-haspopup="menu" aria-expanded={open} aria-label="Account menu" onClick={() => setOpen(!open)}><span>MK</span><Ico n="down" /></button>
      {open && <div role="menu" onKeyDown={roving}><p><b>Mira Kade</b><small>mira@example.org</small></p>{['Profile', 'Billing', 'Sign out'].map((t) => <button key={t} type="button" role="menuitem" onClick={() => setOpen(false)}>{t}</button>)}</div>}
    </div>
  );
}
