import { useDrag } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 35 */ export function Sundial() {
  const [v, bind] = useDrag({ init: 0.4 });
  return (
    <div className={c.sundial} {...bind} aria-label="Sun position" style={{ ...bind.style, '--v': v }}>
      <i /><b /><u /><span>{Math.floor(6 + v * 12)}:00</span>
    </div>
  );
}
