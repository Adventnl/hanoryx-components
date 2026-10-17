import { useToggle } from "../../../stage/hooks";
import c from "../fold.module.css";

export function Curtain() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A stage curtain; open it" onClick={flip}>
      <span className={c.curtain} data-on={on}>
        <i className={c.stageBg}><b>Show</b></i>
        <i className={c.cl} /><i className={c.cr} />
      </span>
    </button>
  );
}
