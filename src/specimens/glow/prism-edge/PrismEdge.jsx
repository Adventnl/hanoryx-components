import { useHot } from "../../../stage/chartKit";
import c from "../glow.module.css";

export function PrismEdge() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} {...bind}>
      <span className={`${c.card} ${c.prism}`}><b>Prism</b><span>splits at the edge</span></span>
    </button>
  );
}
