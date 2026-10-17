import { useHot } from "../../../stage/chartKit";
import c from "../glow.module.css";

export function OutlineGlow() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} {...bind}>
      <span className={`${c.card} ${c.outline}`}><b>Outline</b><span>lights on hover</span></span>
    </button>
  );
}
