import { useDrag } from '../../stage/hooks';
import c from './dials.module.css';

/* 29 */ export function ThrottlePair() {
  const [a, bindA] = useDrag({ mode: 'y', init: 0.4 });
  const [b, bindB] = useDrag({ mode: 'y', init: 0.4 });
  return (
    <div className={c.throttle}>
      <div {...bindA} aria-label="Left throttle" style={{ ...bindA.style, '--v': a }}><i /></div>
      <div {...bindB} aria-label="Right throttle" style={{ ...bindB.style, '--v': b }}><i /></div>
      <output>{Math.abs(a - b) < 0.06 ? 'SYNC' : 'SPLIT'}</output>
    </div>
  );
}
