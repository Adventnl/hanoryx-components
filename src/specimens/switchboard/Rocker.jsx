import { useToggle } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 1 */ export function Rocker() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.rocker} aria-pressed={on} aria-label="Rocker switch" onClick={flip}><b>I</b><b>O</b></button>;
}
