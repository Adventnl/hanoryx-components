import { useToggle } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 30 */ export function MagneticSnap() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.snap} aria-pressed={on} aria-label="Magnetic snap switch" onClick={flip}><u /><i /><u /></button>;
}
