import { useTick, pad2 } from "../../../stage/hooks";
import c from "../passes.module.css";

/* 31 */
export function ExpiringPass() {
  const n = useTick(1000);
  const left = Math.max(0, 20 - (n % 26));
  return (
    <div className={c.fig}>
      <div className={c.xp} data-out={left === 0} style={{ '--left': (left / 20).toFixed(3) }}>
        <svg className={c.xpRing} viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="44" pathLength="1" /></svg>
        <span className={c.xpMid}><span className={c.kp}>Day pass</span><b>00:{pad2(left)}</b></span>
        <span className={c.xpBand}>Expired</span>
      </div>
    </div>
  );
}
