import { useHot } from "../../../stage/chartKit";
import c from "../editorial.module.css";

export function CitationChip() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Citation 1; hover for the reference" {...bind}>
      <span className={c.para}>It has been said before<span className={c.anchor}><span className={c.cite1}>[1]</span><span className={c.ref} data-on={hot}><b>Field notes</b><span>A. Writer, 2024</span></span></span>.</span>
    </button>
  );
}
