import { useHot } from "../../../stage/chartKit";
import c from "../fold.module.css";

export function FlipUp() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Card that flips up like a calendar page" {...bind}>
      <span className={c.stage}>
        <span className={`${c.flip} ${c.x}`}><i><b>Up</b></i><i className={c.bk}><b>Over</b></i></span>
      </span>
    </button>
  );
}
