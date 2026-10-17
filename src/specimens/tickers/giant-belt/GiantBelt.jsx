import c from "../tickers.module.css";
import { Belt } from "../shared";

export function GiantBelt() {
  return (
    <div className={c.fig} role="img" aria-label="Signal and noise, written very large on a slow belt">
      <Belt dur={32} className={c.giant}><span>SIGNAL</span><i /><span>NOISE</span><i /></Belt>
      <Belt dur={19} rev className={c.dots}><span>{'· · · · · · · · · · · · '}</span></Belt>
    </div>
  );
}
