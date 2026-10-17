import c from "../dials.module.css";
import { useSpin } from "../shared";

/* 4 */ export function JogWheel() {
  const [rot, bind] = useSpin();
  return <div className={c.jog} {...bind} aria-label="Jog wheel" style={{ ...bind.style, '--r': `${rot}deg` }}><i /><b /></div>;
}
