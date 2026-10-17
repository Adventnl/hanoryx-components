import { useTick, rng } from "../../../stage/hooks";
import c from "../passes.module.css";

/* 10 */
export function RollingCode() {
  const n = useTick(4000);
  const r = rng(n * 977 + 13);
  const cells = Array.from({ length: 81 }, (_, i) => {
    const x = i % 9;
    const y = Math.floor(i / 9);
    if (x < 3 && y < 3) return !(x === 1 && y === 1);
    if (x > 5 && y < 3) return !(x === 7 && y === 1);
    if (x < 3 && y > 5) return !(x === 1 && y === 7);
    return r() < 0.5;
  });
  return (
    <div className={c.rc}>
      <span className={c.rcCode}>
        {cells.map((on, i) => <i key={i} data-on={on} />)}
        <svg viewBox="0 0 100 100" aria-hidden="true"><rect key={n} x="1" y="1" width="98" height="98" rx="9" pathLength="1" /></svg>
      </span>
      <span className={c.rcSide}>
        <span className={c.k}>One-time code</span>
        <b>{((n * 7919 + 40503) % 65536).toString(16).toUpperCase().padStart(4, '0')}</b>
        <span className={c.k}>Refreshes every 4 s</span>
      </span>
    </div>
  );
}
