import c from './tickers.module.css';
import { Belt } from './shared';

export function CautionTape() {
  return (
    <div className={c.fig} role="img" aria-label="Two crossing strips of caution tape">
      <div className={c.tapes}>
        <div className={`${c.strip} ${c.s1}`}><Belt dur={9}><span>KEEP CLEAR  ·  KEEP CLEAR  ·  </span></Belt></div>
        <div className={`${c.strip} ${c.s2}`}><Belt dur={11} rev><span>MIND THE GAP  ·  MIND THE GAP  ·  </span></Belt></div>
      </div>
    </div>
  );
}
