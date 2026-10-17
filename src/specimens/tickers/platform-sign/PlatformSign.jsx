import { useCycle } from "../../../stage/hooks";
import c from "../tickers.module.css";
import { Belt } from "../shared";

const TRAINS = [['1', '18:02', 'Northfield', 'On time'], ['2', '18:09', 'Harbour', '3 min'], ['3', '18:15', 'Old Mill', 'Delayed']];

export function PlatformSign() {
  const next = useCycle(TRAINS.length, 2200);
  return (
    <div className={c.fig} role="img" aria-label="A platform sign listing the next three trains">
      <div className={c.sign}>
        <ol>
          {TRAINS.map(([pf, time, to, st], r) => (
            <li key={pf} data-next={r === next}><b>{pf}</b><span>{time}</span><span>{to}</span><em>{st}</em></li>
          ))}
        </ol>
        <Belt dur={16} className={c.mind}><span>Mind the gap between the train and the platform  ·  </span></Belt>
      </div>
    </div>
  );
}
