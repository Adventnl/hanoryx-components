import { useDrag } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 18 */ export function SteeringWheel() {
  const [v, bind] = useDrag({ mode: 'r', range: 220, init: 0.5 });
  return <div className={c.wheel} {...bind} aria-label="Steering wheel" style={{ ...bind.style, '--v': v }}><i /><b /></div>;
}
