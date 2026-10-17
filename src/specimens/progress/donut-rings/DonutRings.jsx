import c from "../progress.module.css";
import { run } from "../shared";

/* 8 */ export function DonutRings() {
  return (
    <div className={c.donut} {...run('Donut')}>
      <svg viewBox="0 0 100 100">{[[44, '#ff3333', 0.45], [36, '#ffb347', 0.3], [28, '#6ee7b7', 0.2]].map(([r, col, w], k) => <circle key={r} cx="50" cy="50" r={r} pathLength="1" style={{ stroke: col, '--w': w, '--k': k }} />)}</svg>
    </div>
  );
}
