import { Ico } from '../../stage/icons';
import c from './menus.module.css';
import { useOpen } from './shared';

/* 23 */ export function ShareMenu() {
  const [open, setOpen, ref] = useOpen();
  return (
    <div ref={ref} className={c.share}>
      <button type="button" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}><Ico n="share" /> Share</button>
      {open && <div role="menu">{[['link', 'Link'], ['mail', 'Mail'], ['chat', 'Chat'], ['copy', 'Copy']].map(([n, t]) => <button key={n} type="button" role="menuitem" onClick={() => setOpen(false)}><Ico n={n} /><span>{t}</span></button>)}</div>}
    </div>
  );
}
