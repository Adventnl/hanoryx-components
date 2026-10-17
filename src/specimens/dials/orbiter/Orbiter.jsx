import { useDrag } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 36 */ export function Orbiter() {
  const [v, bind] = useDrag({ mode: 'r', range: 360, init: 0.5 });
  return <div className={c.orbiter} {...bind} aria-label="Orbit angle" style={{ ...bind.style, '--v': v }}><i /><b /></div>;
}
