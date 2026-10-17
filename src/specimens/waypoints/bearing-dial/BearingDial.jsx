import { useDrag } from "../../../stage/hooks";
import c from "../waypoints.module.css";

/* 42 */ export function BearingDial() {
  const [v, bind] = useDrag({ mode: 'r', init: 0.5, range: 360 });
  const deg = (Math.round(v * 360) + 180) % 360;
  const names = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return (
    <div className={c.bearing}>
      <div {...bind} aria-label="Bearing dial" aria-valuetext={`${deg} degrees`} style={{ ...bind.style, '--v': v }}><i aria-hidden="true" />{[0, 90, 180, 270].map((a) => <b key={a} aria-hidden="true" style={{ '--a': a }}>{names[a / 45]}</b>)}</div>
      <output>{String(deg).padStart(3, '0')}° {names[Math.round(deg / 45) % 8]}</output>
    </div>
  );
}
