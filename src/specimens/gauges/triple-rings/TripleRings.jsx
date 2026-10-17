import c from "../gauges.module.css";
import { useHot } from "../shared";

/* 3 */ export function TripleRings() {
  const [hot, h] = useHot();
  const v = hot ? [0.96, 0.88, 0.74] : [0.78, 0.52, 0.31];
  return (
    <button type="button" className={c.rings3} data-hot={hot} aria-label="Triple rings, hover to fill them" {...h}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        {[41, 31, 21].map((r, i) => (
          <g key={r}>
            <circle className={c.rail} cx="50" cy="50" r={r} />
            <circle className={c.ring} data-k={i} cx="50" cy="50" r={r} pathLength="1" style={{ strokeDasharray: `${v[i]} 1` }} />
          </g>
        ))}
      </svg>
      <span>{Math.round(v[0] * 100)}</span>
    </button>
  );
}
