import { useTick } from "../../../stage/hooks";
import c from "../signals.module.css";

/* 25 */ export function LatencyBars() {
  const t = useTick(900);
  const ms = [24, 31, 28, 140, 36, 29, 210, 33, 27, 30, 41, 38];
  const shown = Array.from({ length: 12 }, (_, i) => ms[(i + t) % ms.length]);
  return (
    <div className={c.ping} role="img" aria-label={`Latency, latest ${shown[11]} milliseconds`}>
      {shown.map((v, i) => <i key={i} data-t={v > 150 ? 'bad' : v > 60 ? 'warn' : 'ok'} style={{ height: `${Math.min(100, 12 + v / 2.4)}%` }} />)}
      <output>{shown[11]} ms</output>
    </div>
  );
}
