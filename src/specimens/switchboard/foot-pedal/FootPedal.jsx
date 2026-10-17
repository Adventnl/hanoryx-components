import { useToggle } from "../../../stage/hooks";
import c from "../switchboard.module.css";

/* 26 */ export function FootPedal() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.pedal} aria-pressed={on} aria-label="Foot pedal" onClick={flip}><i /><span>{on ? 'DOWN' : 'UP'}</span></button>;
}
