import { useHot } from "../../../stage/chartKit";
import c from "../tilt.module.css";

export function CardFan() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Three cards that fan out" {...bind}>
      <span className={c.fan}>
        {[0, 1, 2].map((i) => <i key={i} style={{ '--i': i }}>{['A', 'B', 'C'][i]}</i>)}
      </span>
    </button>
  );
}
