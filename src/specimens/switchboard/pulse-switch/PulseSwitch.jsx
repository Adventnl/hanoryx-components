import { useToggle } from "../../../stage/hooks";
import c from "../switchboard.module.css";

/* 32 */ export function PulseSwitch() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.pulse} aria-pressed={on} aria-label="Pulse switch" onClick={flip}><s key={String(on)} /><i /></button>;
}
