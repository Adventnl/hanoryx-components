import { useTick, pad2 } from '../../stage/hooks';
import c from './tickers.module.css';

const FLOORS = Array.from({ length: 12 }, (_, i) => i + 1);

export function FloorIndicator() {
  const t = useTick(1100);
  const p = t % 22;
  const up = p < 11;
  const floor = up ? p + 1 : 23 - p;
  return (
    <div className={c.fig} role="img" aria-label={`Lift at floor ${floor}, going ${up ? 'up' : 'down'}`}>
      <div className={c.lift}>
        <span key={`a${up}`} className={`${c.arrow} ${up ? '' : c.aDn}`} />
        <span key={`f${floor}`} className={c.floorNo}>{pad2(floor)}</span>
        <small>LIFT B</small>
      </div>
      <ol className={c.stops}>{FLOORS.map((n) => <li key={n} data-on={n === floor} />)}</ol>
    </div>
  );
}
