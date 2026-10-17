import { useHot } from "../../../stage/chartKit";
import c from "../fold.module.css";

export function PocketReveal() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="A card sliding out of a sleeve" {...bind}>
      <span className={c.sleeve}>
        <i className={c.scard}><b>Inside</b></i>
        <i className={c.sfront} />
      </span>
    </button>
  );
}
