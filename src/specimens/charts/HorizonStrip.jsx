import c from './charts.module.css';
import { curve, f1, pts, series, smooth3 } from './shared';

/* 28 */ const HORIZON = [121, 122, 123].map((seed) => {
  const v = smooth3(series(20, seed, 0, 1));
  v.push(v[0]);
  const p = pts(v, 100, 12, -24);
  const all = [...p, ...p.map(([x, y]) => [f1(x + 100), y]).slice(1)];
  return `${curve(all)}L200 12L0 12Z`;
});

export function HorizonStrip() {
  return (
    <div className={c.horizon} role="img" aria-label="Three horizon strips scrolling sideways">
      {HORIZON.map((d, r) => (
        <svg key={r} viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
          <g className={c.pan} style={{ animationDuration: `${9 + r * 3}s` }}>
            {[0, 1, 2].map((b) => <path key={b} data-b={b} d={d} transform={`translate(0 ${b * 12})`} />)}
          </g>
        </svg>
      ))}
    </div>
  );
}
