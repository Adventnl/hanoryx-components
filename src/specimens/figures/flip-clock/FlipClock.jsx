import { useTick, pad2 } from "../../../stage/hooks";
import c from "../figures.module.css";

const digitsOf = (h, m) => [Math.floor(h / 10), h % 10, Math.floor(m / 10), m % 10];

/* 1 */ const clockAt = (n) => { const m = (9 * 60 + 41 + n) % 1440; return [Math.floor(m / 60), m % 60]; };

function FlipDigit({ cur, prev }) {
  return (
    <div className={c.flipDigit}>
      <div key={cur} className={c.fi}>
        <span className={c.fTop}><b>{cur}</b></span>
        <span className={c.fBotOld}><b>{prev}</b></span>
        <span className={c.fLeafTop}><b>{prev}</b></span>
        <span className={c.fLeafBot}><b>{cur}</b></span>
        <span className={c.fBotNew}><b>{cur}</b></span>
      </div>
    </div>
  );
}

export function FlipClock() {
  const n = useTick(1400);
  const now = clockAt(n);
  const d = digitsOf(...now);
  const p = digitsOf(...clockAt(Math.max(0, n - 1)));
  return (
    <div className={c.fig} role="img" aria-label={`Flip clock showing ${pad2(now[0])}:${pad2(now[1])}`}>
      <div className={c.flipClock}>
        <FlipDigit cur={d[0]} prev={p[0]} /><FlipDigit cur={d[1]} prev={p[1]} />
        <b>:</b>
        <FlipDigit cur={d[2]} prev={p[2]} /><FlipDigit cur={d[3]} prev={p[3]} />
      </div>
    </div>
  );
}
