import { rng } from '../../stage/hooks';
import c from './patterns.module.css';

/* a halftone ramp is a grid of circles whose radius follows a gradient */
export function HalftoneRamp() {
  const cols = 14;
  const rows = 8;
  return (
    <div className={c.sw} role="img" aria-label="A halftone ramp">
      <svg viewBox="0 0 110 64" className={c.ht} aria-hidden="true">
        {Array.from({ length: rows * cols }, (_, i) => { const x = i % cols; const y = Math.floor(i / cols); return <circle key={i} cx={4 + x * 7.8} cy={4 + y * 8} r={0.4 + (x / cols) * 3.2 * (0.7 + 0.3 * rng(i + 2)())} />; })}
      </svg>
    </div>
  );
}
