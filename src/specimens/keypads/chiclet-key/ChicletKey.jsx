import { useToggle } from "../../../stage/hooks";
import c from "../keypads.module.css";

/* 2 */ export function ChicletKey() {
  const [on, flip] = useToggle();
  return <button type="button" className={c.chiclet} aria-pressed={on} aria-label="Chiclet key" onClick={flip}>A</button>;
}
