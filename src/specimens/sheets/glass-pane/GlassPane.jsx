import { useToggle } from "../../../stage/hooks";
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 36 */ export function GlassPane() {
  const [on, set] = useToggle(true);
  return <Stage label="Glass pane" className={c.gradient}><div className={c.glass} data-on={on}><b>Frosted</b><p>Light passes, detail does not.</p></div><button type="button" className={c.open} aria-pressed={on} onClick={set}>{on ? 'Clear' : 'Frost'}</button></Stage>;
}
