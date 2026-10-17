import { useHot } from "../../../stage/chartKit";
import c from "../bento.module.css";
import { Tile } from "../shared";

export function RingTile() {
  const [hot, bind] = useHot();
  const v = hot ? 86 : 62;
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label={`Goal ring at ${v} percent`} {...bind}>
      <Tile k="Goal">
        <span className={c.ringWrap}>
          <svg className={c.ring} viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="15" /><circle cx="20" cy="20" r="15" pathLength="100" style={{ strokeDashoffset: 100 - v }} /></svg>
          <b>{v}%</b>
        </span>
      </Tile>
    </button>
  );
}
