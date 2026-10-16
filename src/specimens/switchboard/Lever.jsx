import { useToggle } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 12 */ export function Lever() {
  const [on, flip] = useToggle();
  return (
    <button type="button" className={c.lever} aria-pressed={on} aria-label="Lever" onClick={flip}>
      <span>UP</span><i /><span>DN</span>
    </button>
  );
}
