import { useToggle } from "../../../stage/hooks";
import c from "../markup.module.css";

export function TornEdge() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A sheet that tears in two" onClick={flip}>
      <span className={c.torn} data-on={on}>
        <span className={c.halfL}>Tear here, then<br />read the other half.</span>
        <span className={c.halfR} aria-hidden="true">Tear here, then<br />read the other half.</span>
      </span>
    </button>
  );
}
