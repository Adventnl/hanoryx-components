import c from "../dials.module.css";
import { useStick } from "../shared";

/* 26 */ export function Joystick() {
  const [p, bind] = useStick();
  return (
    <div className={c.stick} {...bind} aria-label="Joystick" style={{ ...bind.style, '--x': p.x, '--y': p.y }}>
      <u /><i /><span>{p.x.toFixed(1)}, {(-p.y).toFixed(1)}</span>
    </div>
  );
}
