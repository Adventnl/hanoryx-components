import { useHot } from "../../../stage/chartKit";
import c from "../fold.module.css";

export function BookEdge() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Stacked pages that fan out" {...bind}>
      <span className={c.edge}>{Array.from({ length: 8 }, (_, i) => <i key={i} style={{ '--i': i }} />)}</span>
    </button>
  );
}
