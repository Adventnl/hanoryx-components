import { useHot } from "../../../stage/chartKit";
import c from "../tilt.module.css";

export function Lift() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} {...bind}>
      <span className={c.stage}>
        <span className={`${c.card} ${c.lift}`}><b>Lift</b><span>rises, shadow widens</span></span>
        <i className={c.floor} />
      </span>
    </button>
  );
}
