import { useDrag } from "../../../stage/hooks";
import c from "../waypoints.module.css";

/* 31 */ export function DepthMarker() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.7 });
  const m = Math.round((1 - v) * 4000);
  const zone = m < 200 ? 'Sunlight' : m < 1000 ? 'Twilight' : m < 4000 ? 'Midnight' : 'Abyss';
  return (
    <div className={c.depth} {...bind} aria-label="Depth, drag the marker" aria-valuetext={`${m} metres, ${zone}`} style={{ ...bind.style, '--v': 1 - v }}>
      <b aria-hidden="true"><i /></b>
      <output>{m} m<small>{zone}</small></output>
    </div>
  );
}
