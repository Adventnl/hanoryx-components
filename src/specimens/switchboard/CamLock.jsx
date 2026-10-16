import { useToggle } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 28 */ export function CamLock() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.cam} aria-pressed={on} aria-label="Cam lock" onClick={flip}><i /><b /></button>;
}
