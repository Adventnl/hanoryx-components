import { useToggle } from "../../../stage/hooks";
import c from "../fold.module.css";

export function DiagonalFlip() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="Card that flips over a diagonal" onClick={flip}>
      <span className={c.stage}>
        <span className={`${c.flip} ${c.d}`} data-on={on}><i><b>Slant</b></i><i className={c.bkD}><b>Turn</b></i></span>
      </span>
    </button>
  );
}
