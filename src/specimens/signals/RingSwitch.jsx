import { useToggle } from '../../stage/hooks';
import c from './signals.module.css';

/* 28 */ export function RingSwitch() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.rtoggle} role="switch" aria-checked={on} aria-label="Ring toggle" onClick={flip}><i /><span>{on ? 'On' : 'Off'}</span></button>;
}
