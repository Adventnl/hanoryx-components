import c from "../gauges.module.css";
import { arc } from "../shared";

/* 2 */ export function ArcMeter() {
  return (
    <div className={c.arcMeter} role="img" aria-label="Arc meter swinging between low and high">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <path className={c.rail} d={arc(50, 50, 40, -135, 135)} />
        <path className={c.run} d={arc(50, 50, 40, -135, 135)} pathLength="1" />
      </svg>
      <b className={c.num} />
    </div>
  );
}
