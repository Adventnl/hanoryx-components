import { useToggle } from "../../../stage/hooks";
import c from "../fold.module.css";

export function ScrollRoll() {
  const [on, flip] = useToggle(true);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A scroll; roll it up or down" onClick={flip}>
      <span className={c.scroll} data-on={on}>
        <i className={c.roller} />
        <i className={c.paper}><b>Scroll</b><span>unrolls</span></i>
        <i className={c.roller} />
      </span>
    </button>
  );
}
