import c from "../gauges.module.css";
import { pt } from "../shared";

/* 20 */ const DOTS = Array.from({ length: 28 }, (_, i) => pt(50, 50, 40, -135 + (270 * i) / 27));

export function DotArc() {
  return (
    <div className={c.dotArc} role="img" aria-label="A dotted arc lighting up">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        {DOTS.map(([x, y], i) => <circle key={i} style={{ '--i': i }} cx={x} cy={y} r={i % 3 === 0 ? 2.7 : 2} />)}
      </svg>
      <b className={c.num} />
    </div>
  );
}
