import { useHot } from "../../../stage/chartKit";
import c from "../markup.module.css";

export function PostIt() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Sticky note: ask who wound the belt" {...bind}>
      <span className={c.sticky}><span className={c.tape} /><span>Ask who wound the belt.</span></span>
    </button>
  );
}
