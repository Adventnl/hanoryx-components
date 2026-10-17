import { useDrag } from "../../../stage/hooks";
import c from "../signals.module.css";

/* 12 */ export function ChargeGauge() {
  const [v, bind] = useDrag({ init: 0.35 });
  const t = v > 0.5 ? 'ok' : v > 0.2 ? 'warn' : 'bad';
  return <div className={c.charge} {...bind} aria-label="Charge level" aria-valuetext={`${Math.round(v * 100)} percent`} data-t={t} style={{ ...bind.style, '--v': v }}><i /><b>{Math.round(v * 100)}%</b></div>;
}
