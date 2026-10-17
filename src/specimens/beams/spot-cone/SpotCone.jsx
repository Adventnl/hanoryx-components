import { useDrag } from "../../../stage/hooks";
import c from "../beams.module.css";

/* 15 */ export function SpotCone() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5 });
  return (
    <div className={c.sw}>
      <i className={c.spot} style={{ '--ang': `${(v - 0.5) * 90}deg` }} /><b className={c.lamp} />
      <div className={c.rail} {...bind} aria-label="Lamp angle"><u style={{ left: `${v * 100}%` }} /></div>
    </div>
  );
}
