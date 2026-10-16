import { useToggle } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 2 */ export function Pill() {
  const [on, flip] = useToggle(true);
  return <button type="button" role="switch" aria-checked={on} aria-label="Pill switch" className={c.pill} onClick={flip}><i /></button>;
}
