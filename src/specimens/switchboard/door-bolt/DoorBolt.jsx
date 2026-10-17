import { useToggle } from "../../../stage/hooks";
import c from "../switchboard.module.css";

/* 17 */ export function DoorBolt() {
  const [on, flip] = useToggle(true);
  return <button type="button" className={c.bolt} aria-pressed={on} aria-label="Door bolt" onClick={flip}><i /><b /></button>;
}
