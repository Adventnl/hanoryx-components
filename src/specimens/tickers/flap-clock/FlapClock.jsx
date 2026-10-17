import { useTick } from "../../../stage/hooks";
import c from "../tickers.module.css";
import { Cell } from "../shared";

/** the six digits of a clock that started at 10:42:51 and has run for n seconds */
const clockAt = (n) => {
  const s = (38571 + n) % 86400;
  const h = Math.floor(s / 3600);
  const m = Math.floor(s / 60) % 60;
  const sec = s % 60;
  return [Math.floor(h / 10), h % 10, Math.floor(m / 10), m % 10, Math.floor(sec / 10), sec % 10].map(String);
};

export function FlapClock() {
  const t = useTick(1000);
  const now = clockAt(t);
  const was = clockAt(Math.max(0, t - 1));
  return (
    <div className={c.fig} role="img" aria-label="A flip clock counting seconds">
      <span className={c.row} style={{ '--fs': '12cqw' }}>
        {[0, 2, 4].map((a) => (
          <span key={a} className={c.pair}>
            <Cell key={`${t}-${a}`} cur={now[a]} prev={was[a]} />
            <Cell key={`${t}-${a + 1}`} cur={now[a + 1]} prev={was[a + 1]} />
          </span>
        ))}
      </span>
    </div>
  );
}
