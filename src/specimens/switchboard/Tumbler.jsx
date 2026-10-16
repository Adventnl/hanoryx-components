import { useToggle } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 11 */ export function Tumbler() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.tumbler} aria-pressed={on} aria-label="Tumbler switch" onClick={flip}><i /><b /></button>;
}
