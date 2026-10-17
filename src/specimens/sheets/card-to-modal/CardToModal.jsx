import { useToggle } from "../../../stage/hooks";
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 21 */ export function CardToModal() {
  const [on, set] = useToggle();
  return <Stage label="Card to modal"><button type="button" className={c.card} data-on={on} aria-expanded={on} onClick={set}><b>Quiet hours</b><span>{on ? 'From ten at night until seven, nothing buzzes. Tap again to fold it away.' : 'Tap to open'}</span></button></Stage>;
}
