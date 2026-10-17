import { useToggle } from "../../../stage/hooks";
import c from "../switchboard.module.css";

/* 29 */ export function Hasp() {
  const [open, flip] = useToggle();
  return (
    <button type="button" className={c.hasp} aria-pressed={open} aria-label="Hasp" onClick={flip}>
      <b /><span className={c.lamp} /><i />
    </button>
  );
}
