import { useHot } from "../../../stage/chartKit";
import c from "../editorial.module.css";

export function CreditTag() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Photo credit" {...bind}>
      <span className={`${c.frame} ${c.art3}`}>
        <span className={c.pill}><b>©</b><span>Photo: A. Writer</span></span>
      </span>
    </button>
  );
}
