import { useHot } from "../../../stage/chartKit";
import c from "../glow.module.css";

export function EdgeLight() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} {...bind}>
      <span className={`${c.card} ${c.edge}`}><i /><b>Edge</b><span>a line of light on top</span></span>
    </button>
  );
}
