import c from './tickers.module.css';
import { Belt } from './shared';

const LINES = [['ONE WAY', 13, false], ['THE OTHER', 17, true], ['ONE WAY', 10, false]];

export function CounterBelts() {
  return (
    <div className={c.fig} role="img" aria-label="Three belts running in opposite directions">
      {LINES.map(([txt, dur, rev], i) => (
        <Belt key={i} dur={dur} rev={rev} className={c.bigBelt}>
          <span className={i === 1 ? c.outline : c.solid}>{txt}  ·  </span>
        </Belt>
      ))}
    </div>
  );
}
