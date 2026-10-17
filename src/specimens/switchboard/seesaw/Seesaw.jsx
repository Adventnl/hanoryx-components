import { useToggle } from "../../../stage/hooks";
import c from "../switchboard.module.css";

/* 22 */ export function Seesaw() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.seesaw} aria-pressed={on} aria-label="Seesaw" onClick={flip}><i><b /><b /></i><u /></button>;
}
