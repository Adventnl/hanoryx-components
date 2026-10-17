import { useToggle } from "../../../stage/hooks";
import c from "../cockpit.module.css";

/* 33 */ export function TerrainWarning() {
  const [on, flip] = useToggle(true);
  return <button type="button" className={c.pull} aria-pressed={on} aria-label={on ? 'Terrain warning on. Press to silence' : 'Silenced. Press to trigger'} onClick={flip} data-on={on}>PULL UP</button>;
}
