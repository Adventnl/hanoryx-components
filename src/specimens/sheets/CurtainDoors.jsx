import { useToggle } from '../../stage/hooks';
import c from './sheets.module.css';
import { Stage } from './shared';

/* 27 */ export function CurtainDoors() {
  const [on, set] = useToggle();
  return <Stage label="Curtain"><div className={c.doors} data-on={on}><i /><i /><p>Behind the curtain</p></div><button type="button" className={c.open} aria-pressed={on} onClick={set}>{on ? 'Close' : 'Open'}</button></Stage>;
}
