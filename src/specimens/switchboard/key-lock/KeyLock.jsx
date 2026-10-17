import { useToggle } from "../../../stage/hooks";
import c from "../switchboard.module.css";

/* 16 */ export function KeyLock() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.keylock} aria-pressed={on} aria-label="Key lock" onClick={flip}><i /><span>{on ? 'RUN' : 'LOCK'}</span></button>;
}
