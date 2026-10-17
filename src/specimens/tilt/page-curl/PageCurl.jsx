import { useHot } from "../../../stage/chartKit";
import c from "../tilt.module.css";

export function PageCurl() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="A page whose corner curls" {...bind}>
      <span className={c.curl}><b>Curl</b><i /></span>
    </button>
  );
}
