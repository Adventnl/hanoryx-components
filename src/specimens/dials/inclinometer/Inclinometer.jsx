import { useDrag } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 40 */ export function Inclinometer() {
  const [v, bind] = useDrag({ mode: 'r', range: 120, init: 0.5 });
  const deg = (v - 0.5) * 60;
  return (
    <div className={c.incl} {...bind} aria-label="Tilt" style={{ ...bind.style, '--v': v }}>
      <i><b /></i><span>{deg.toFixed(0)}°</span>
    </div>
  );
}
