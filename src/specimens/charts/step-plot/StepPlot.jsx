import c from "../charts.module.css";
import { f1, series } from "../shared";

/* 26 */ const STEP = (() => {
  const v = series(14, 111, 0.2, 0.95);
  let d = `M2 ${f1(48 - v[0] * 42)}`;
  v.forEach((y, i) => { d += `H${f1(2 + (i * 96) / 13)}V${f1(48 - y * 42)}`; });
  return `${d}H98`;
})();

export function StepPlot() {
  return (
    <div className={c.ch} role="img" aria-label="A step line drawing itself">
      <svg viewBox="0 0 100 52" aria-hidden="true">
        <path className={c.axis} d="M2 2V50H98" />
        <path className={c.ghost} d={STEP} />
        <path className={c.draw} d={STEP} pathLength="1" />
      </svg>
    </div>
  );
}
