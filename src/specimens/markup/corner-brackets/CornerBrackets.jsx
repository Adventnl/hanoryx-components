import { useHot } from "../../../stage/chartKit";
import c from "../markup.module.css";

export function CornerBrackets() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} {...bind}>
      <span className={c.para}>Look closely at <span className={c.brk}>this phrase</span> and nothing else.</span>
    </button>
  );
}
