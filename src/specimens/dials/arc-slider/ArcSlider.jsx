import { useDrag } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 12 */ export function ArcSlider() {
  const [v, bind] = useDrag({ mode: 'r', range: 240, init: 0.4 });
  return (
    <div className={c.arc} {...bind} aria-label="Arc slider" style={{ ...bind.style, '--v': v }}>
      <svg viewBox="0 0 100 80" aria-hidden="true"><path d="M14 66A40 40 0 1 1 86 66" pathLength="1" /><path className={c.fill} d="M14 66A40 40 0 1 1 86 66" pathLength="1" style={{ strokeDashoffset: 1 - v }} /></svg>
      <i /><span>{Math.round(v * 100)}</span>
    </div>
  );
}
