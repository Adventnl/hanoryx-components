import { useHot } from "../../../stage/chartKit";
import c from "../fold.module.css";

/* ---------- 03 peels and tears ---------- */

export function PeelLabel() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="A label peeling back to show what is under it" {...bind}>
      <span className={c.stage}>
        <span className={c.label}>
          <i className={c.under}><b>Under</b></i>
          <i className={c.lpart}><b>Label</b></i>
          <i className={c.lpeel} />
        </span>
      </span>
    </button>
  );
}
