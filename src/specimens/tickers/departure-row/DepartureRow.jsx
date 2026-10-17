import { useTick } from "../../../stage/hooks";
import c from "../tickers.module.css";
import { Cell } from "../shared";

const FLIGHTS = [['18:45', 'ZURICH', 'B12'], ['19:05', 'OSLO', 'A03'], ['19:20', 'LISBON', 'C21']];

const STATUS = ['ON TIME', 'BOARDED', 'DELAYED', 'CLOSED ', 'LANDED '];

const statusAt = (r, t) => STATUS[(Math.floor((Math.max(0, t) + r * 3) / 9) + r) % STATUS.length];

export function DepartureRow() {
  const t = useTick(1400);
  return (
    <div className={c.fig} role="img" aria-label="A departures board whose statuses change one at a time">
      <ol className={c.dep}>
        {FLIGHTS.map(([time, to, gate], r) => {
          const now = statusAt(r, t);
          const was = statusAt(r, t - 1);
          return (
            <li key={to}>
              <span>{time}</span><span>{to}</span><span>{gate}</span>
              <span className={c.depS} style={{ '--fs': '0.76rem' }}>
                {[...now].map((ch, i) => <Cell key={`${t}-${i}`} cur={ch} prev={was[i]} i={i} />)}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
