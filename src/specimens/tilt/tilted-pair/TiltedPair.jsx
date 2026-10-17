import { useHot } from "../../../stage/chartKit";
import c from "../tilt.module.css";

export function TiltedPair() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Two tilted cards that line up" {...bind}>
      <span className={c.pair}><i><b>One</b></i><i><b>Two</b></i></span>
    </button>
  );
}
