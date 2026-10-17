import { useHot } from "../../../stage/chartKit";
import c from "../fold.module.css";

export function LayerPeel() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Three layers; the top one peels away" {...bind}>
      <span className={c.layers}>
        <i className={c.l3}><b>Three</b></i><i className={c.l2}><b>Two</b></i><i className={c.l1}><b>One</b></i>
      </span>
    </button>
  );
}
