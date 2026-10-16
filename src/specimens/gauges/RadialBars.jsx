import c from './gauges.module.css';
import { arc } from './shared';

/* 19 */ export function RadialBars() {
  return (
    <div className={c.radial} role="img" aria-label="Five radial bars rising and falling">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        {[44, 36, 28, 20, 12].map((r, i) => (
          <g key={r}>
            <path className={c.rail} d={arc(50, 50, r, -135, 135)} />
            <path className={c.run} data-k={i} d={arc(50, 50, r, -135, 135)} pathLength="1" style={{ animationDuration: `${4.5 + i * 1.3}s`, animationDelay: `${-i * 1.7}s` }} />
          </g>
        ))}
      </svg>
    </div>
  );
}
