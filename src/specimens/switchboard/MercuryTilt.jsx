import { useToggle } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 18 */ export function MercuryTilt() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.mercury} aria-pressed={on} aria-label="Mercury tilt switch" onClick={flip}><i /></button>;
}
