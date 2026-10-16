import { useToggle } from '../../stage/hooks';
import { Ico } from '../../stage/icons';
import c from './docks.module.css';

/* 13 */ export function ArcDock() {
  const [open, flip] = useToggle(true);
  const icons = ['home', 'star', 'bolt', 'user'];
  return (
    <div className={c.arc} data-open={open}>
      {icons.map((n, k) => <button key={n} type="button" aria-label={n} tabIndex={open ? 0 : -1} style={{ '--a': -60 + k * 40 }}><Ico n={n} /></button>)}
      <button type="button" aria-expanded={open} aria-label="Arc dock" onClick={flip}><Ico n="gear" /></button>
    </div>
  );
}
