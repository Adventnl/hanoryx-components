import { useDrag } from "../../../stage/hooks";
import { polar } from "../../../stage/chartKit";
import c from "../figures.module.css";

/* 34 */ export function TimesWheel() {
  const [v, bind] = useDrag({ init: 0.08 });
  const mult = +(2 + v * 48).toFixed(1);
  const n = 72;
  const d = Array.from({ length: n }, (_, i) => {
    const [x1, y1] = polar(50, 50, 46, (i / n) * 360);
    const [x2, y2] = polar(50, 50, 46, (((i * mult) % n) / n) * 360);
    return `M${x1} ${y1}L${x2} ${y2}`;
  }).join('');
  return (
    <div className={c.fig}>
      <svg className={c.wheel} viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" /><path d={d} /></svg>
      <div className={c.slide} {...bind} aria-label="Multiplier, drag to change it" style={{ ...bind.style, '--v': v }}><i /></div>
      <output className={c.sub}>× <b>{mult}</b></output>
    </div>
  );
}
