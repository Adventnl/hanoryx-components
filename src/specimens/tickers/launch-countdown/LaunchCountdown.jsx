import { useTick, pad2 } from "../../../stage/hooks";
import c from "../tickers.module.css";

export function LaunchCountdown() {
  const t = useTick(1000);
  const left = 20 - (t % 25);
  const gone = left <= 0;
  return (
    <div className={c.fig} role="img" aria-label={gone ? 'Lift off' : `${left} seconds to launch`}>
      <p className={c.tm} data-gone={gone}>
        <span>T{gone ? '+' : '−'}</span>00:{pad2(Math.abs(left))}
      </p>
      <span className={c.tmBar}><i style={{ '--w': Math.min(1, (20 - left) / 20) }} /></span>
      <small className={c.tmNote}>{gone ? 'LIFT OFF' : 'ALL SYSTEMS NOMINAL'}</small>
    </div>
  );
}
