import c from './keypads.module.css';
import { useHold } from './shared';

/* 5 */ export function HoldRing() {
  const [held, hold] = useHold();
  return (
    <button type="button" className={c.holdRing} data-held={held} aria-label="Hold to confirm" {...hold}>
      <svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="19" pathLength="1" /><circle className={c.prog} cx="22" cy="22" r="19" pathLength="1" /></svg>
      <span>{held ? 'KEEP' : 'HOLD'}</span>
    </button>
  );
}
