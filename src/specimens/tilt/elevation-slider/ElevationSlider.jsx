import { useDrag } from "../../../stage/hooks";
import c from "../tilt.module.css";

export function ElevationSlider() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.4, steps: 5 });
  const n = Math.round(v * 5);
  return (
    <div className={c.fig}>
      <div className={c.elevStage}><div className={c.elev} style={{ '--n': n }}><b>Level {n}</b></div></div>
      <div {...bind} className={c.track} aria-label="Elevation" aria-valuetext={`Level ${n} of 5`} style={{ ...bind.style, '--v': v }}><i /></div>
    </div>
  );
}
