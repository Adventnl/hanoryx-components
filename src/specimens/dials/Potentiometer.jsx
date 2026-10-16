import { useDrag } from '../../stage/hooks';
import c from './dials.module.css';

/* 25 */ export function Potentiometer() {
  const [v, bind] = useDrag({ mode: 'r', range: 280, init: 0.5 });
  return (
    <div className={c.pot} {...bind} aria-label="Potentiometer" style={{ ...bind.style, '--v': v }}>
      <svg viewBox="0 0 100 100" aria-hidden="true"><path d="M20 78A42 42 0 1 1 80 78" /><path className={c.zig} d="M24 80l3-5 4 5 4-5 4 5 4-5 4 5 4-5 4 5 4-5 4 5 4-5 4 5" /></svg>
      <i /><span>{Math.round(v * 10000)} Ω</span>
    </div>
  );
}
