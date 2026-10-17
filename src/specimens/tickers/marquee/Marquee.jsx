import c from "../tickers.module.css";
import { Belt } from "../shared";

/* ---------- 02 marquees and tapes ---------- */

export function Marquee() {
  return (
    <div className={c.fig} role="img" aria-label="Quiet signals, loud systems">
      <Belt dur={15}><span className={c.mqText}>Quiet signals  ·  loud systems  ·  </span></Belt>
    </div>
  );
}
