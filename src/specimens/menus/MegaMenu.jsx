import { Ico } from '../../stage/icons';
import c from './menus.module.css';
import { useOpen } from './shared';

/* 6 */ export function MegaMenu() {
  const [open, setOpen, ref] = useOpen();
  const cols = [['Make', ['Pages', 'Forms', 'Flows']], ['Learn', ['Guides', 'Videos']], ['Ship', ['Deploy', 'Domains', 'Logs']]];
  return (
    <div ref={ref} className={c.mega}>
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)}>Products <Ico n="down" /></button>
      {open && <div>{cols.map(([h, l]) => <section key={h}><h4>{h}</h4>{l.map((t) => <a key={t} href="#mega" onClick={(e) => e.preventDefault()}>{t}</a>)}</section>)}</div>}
    </div>
  );
}
