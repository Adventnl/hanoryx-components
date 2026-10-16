import { useToggle } from '../../stage/hooks';
import { Ico } from '../../stage/icons';
import c from './menus.module.css';

/* 28 */ export function FanMenu() {
  const [open, flip] = useToggle(true);
  return (
    <div className={c.fan} data-open={open}>
      {['A', 'B', 'C', 'D'].map((t, k) => <button key={t} type="button" tabIndex={open ? 0 : -1} style={{ '--k': k }}>{t}</button>)}
      <button type="button" aria-expanded={open} aria-label="Fan menu" onClick={flip}><Ico n="plus" /></button>
    </div>
  );
}
