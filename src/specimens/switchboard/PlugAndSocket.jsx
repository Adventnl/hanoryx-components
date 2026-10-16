import { useToggle } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 35 */ export function PlugAndSocket() {
  const [on, flip] = useToggle();
  return (
    <button type="button" className={c.plug} aria-pressed={on} aria-label="Plug" onClick={flip}>
      <span className={c.bulb} data-on={on} /><i /><b />
    </button>
  );
}
