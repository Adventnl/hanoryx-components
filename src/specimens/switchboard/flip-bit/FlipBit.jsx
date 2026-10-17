import { useToggle } from "../../../stage/hooks";
import c from "../switchboard.module.css";

/* 27 */ export function FlipBit() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.flipBit} aria-pressed={on} aria-label="Flip bit" onClick={flip}><span key={String(on)}>{on ? 1 : 0}</span></button>;
}
