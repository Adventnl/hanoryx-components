import { useToggle } from "../../../stage/hooks";
import c from "../fold.module.css";

export function TriFold() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A brochure with two doors" onClick={flip}>
      <span className={c.stage}>
        <span className={c.tri} data-on={on}>
          <i className={c.tc}><b>Inside</b></i>
          <i className={c.tl}><b>Left</b></i>
          <i className={c.tr}><b>Right</b></i>
        </span>
      </span>
    </button>
  );
}
