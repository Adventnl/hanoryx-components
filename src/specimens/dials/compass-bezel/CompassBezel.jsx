import { useDrag } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 17 */ export function CompassBezel() {
  const [v, bind] = useDrag({ mode: 'r', range: 360, init: 0.5 });
  return (
    <div className={c.bezelBox} {...bind} aria-label="Compass bezel" style={{ ...bind.style, '--v': v }}>
      <i><b>N</b></i><u /><span>{Math.round(((v + 0.5) % 1) * 360)}°</span>
    </div>
  );
}
