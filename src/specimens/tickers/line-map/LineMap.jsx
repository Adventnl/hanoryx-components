import { useTick } from "../../../stage/hooks";
import c from "../tickers.module.css";

const STOPS = ['Mill', 'Quay', 'Market', 'Cross', 'Park', 'End'];

export function LineMap() {
  const t = useTick(1500);
  const i = t % (STOPS.length * 2 - 2);
  const fwd = i < STOPS.length - 1;
  const at = i < STOPS.length ? i : 2 * (STOPS.length - 1) - i;
  const next = STOPS[Math.max(0, Math.min(STOPS.length - 1, at + (fwd ? 1 : -1)))];
  return (
    <div className={c.fig} role="img" aria-label={`A train at ${STOPS[at]}, next ${next}`}>
      <div className={c.line} style={{ '--at': at }}>
        <ol>{STOPS.map((s, k) => <li key={s} data-done={k <= at}><i /><span>{s}</span></li>)}</ol>
        <b className={c.train} />
      </div>
      <p className={c.note}>NOW <b>{STOPS[at]}</b>  ·  NEXT <b>{next}</b></p>
    </div>
  );
}
