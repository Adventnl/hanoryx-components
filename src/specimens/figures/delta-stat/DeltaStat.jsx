import { useHot } from "../../../stage/chartKit";
import c from "../figures.module.css";

/* 19 */ const STAT = [48210, 51240];

export function DeltaStat() {
  const [hot, h] = useHot();
  const up = STAT[1] >= STAT[0];
  return (
    <button type="button" className={c.stat} style={{ '--cv': hot ? STAT[1] : STAT[0] }} aria-label="Delta stat, hover to compare with the last period" {...h}>
      <em>Sessions</em>
      <b className={c.cv} />
      <i data-up={up} data-show={hot}>{up ? '▲' : '▼'} {Math.abs(((STAT[1] - STAT[0]) / STAT[0]) * 100).toFixed(1)}%</i>
    </button>
  );
}
