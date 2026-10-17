import { useToggle } from "../../../stage/hooks";
import c from "../lenses.module.css";

/* 25 */ export function RackFocus() {
  const [front, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.area} ${c.rack}`} data-front={front} aria-pressed={front} aria-label="Rack focus. Press to switch focus" onClick={flip}>
      <span className={c.near}>Near</span><span className={c.far}>Far</span>
    </button>
  );
}
