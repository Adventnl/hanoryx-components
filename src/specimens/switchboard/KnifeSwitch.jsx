import { useToggle } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 7 */ export function KnifeSwitch() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={c.knife} aria-pressed={on} aria-label="Knife switch" onClick={flip}>
      <u /><i /><u />
    </button>
  );
}
