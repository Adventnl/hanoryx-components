import { useCycle } from "../../../stage/hooks";
import c from "../signals.module.css";

/* 4 */ export function TrafficLight() {
  const k = useCycle(4, 1200);
  const on = ['bad', 'bad-warn', 'ok', 'warn'][k];
  return <div className={c.traffic} role="img" aria-label={`Traffic light: ${['red', 'red and amber', 'green', 'amber'][k]}`}>{['bad', 'warn', 'ok'].map((t) => <i key={t} data-t={t} data-on={on.includes(t)} />)}</div>;
}
