import { useToggle } from "../../../stage/hooks";
import c from "../switchboard.module.css";

/* 34 */ export function Fuse() {
  const [on, flip] = useToggle(true);
  return <button type="button" className={c.fuse} aria-pressed={on} aria-label="Fuse" onClick={flip}><i><b /></i><u /><u /></button>;
}
