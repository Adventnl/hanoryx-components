import { useDrag } from "../../../stage/hooks";
import c from "../signals.module.css";

/* 39 */ export function AlertThreshold() {
  const [v, bind] = useDrag({ init: 0.5 });
  const pts = [20, 24, 22, 30, 28, 26, 34, 70, 40, 32, 30, 28].map((y, i) => `${i ? 'L' : 'M'}${(i * 100) / 11} ${50 - y * 0.6}`).join('');
  return (
    <div className={c.spark} {...bind} aria-label="Alert threshold" aria-valuetext={`${Math.round(20 + v * 60)} milliseconds`} style={{ ...bind.style, '--v': v }}>
      <svg viewBox="0 0 100 50" preserveAspectRatio="none" aria-hidden="true"><path d={pts} /></svg>
      <i aria-hidden="true" />
    </div>
  );
}
