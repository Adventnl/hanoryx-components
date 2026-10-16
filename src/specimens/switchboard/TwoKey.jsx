import { useToggle } from '../../stage/hooks';
import c from './switchboard.module.css';

/* 5 */ export function TwoKey() {
  const [a, flipA] = useToggle();
  const [b, flipB] = useToggle();
  return (
    <div className={c.twoKey} data-live={a && b}>
      <button type="button" aria-pressed={a} aria-label="Key one" onClick={flipA}><i /></button>
      <span className={c.lamp} />
      <button type="button" aria-pressed={b} aria-label="Key two" onClick={flipB}><i /></button>
    </div>
  );
}
