import c from "../bento.module.css";
import { Tile } from "../shared";

export function RingsTile() {
  return (
    <div className={c.fig} role="img" aria-label="Three activity rings filling and emptying">
      <Tile k="Activity">
        <svg className={c.rings} viewBox="0 0 60 60" aria-hidden="true">
          {[24, 17, 10].map((r, i) => <g key={r}><circle cx="30" cy="30" r={r} /><circle className={c.arc} cx="30" cy="30" r={r} pathLength="100" style={{ '--i': i }} /></g>)}
        </svg>
      </Tile>
    </div>
  );
}
