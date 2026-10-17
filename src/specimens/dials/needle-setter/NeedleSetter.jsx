import { useDrag } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 14 */ export function NeedleSetter() {
  const [v, bind] = useDrag({ mode: 'r', range: 180, init: 0.3 });
  return (
    <div className={c.needleGauge} {...bind} aria-label="Needle setter" style={{ ...bind.style, '--v': v }}>
      <i /><b /><span>{Math.round(v * 240)}</span>
    </div>
  );
}
