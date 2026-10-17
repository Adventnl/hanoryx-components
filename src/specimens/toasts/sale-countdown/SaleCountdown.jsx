import { useTick } from "../../../stage/hooks";
import c from "../toasts.module.css";

/* 41 */ export function SaleCountdown() {
  const t = useTick(1000);
  const left = 134 - (t % 134);
  return <div role="timer" aria-label="Sale countdown" className={`${c.banner} ${c.sale}`}><span>Sale ends in</span><b>{String(Math.floor(left / 60)).padStart(2, '0')}:{String(left % 60).padStart(2, '0')}</b></div>;
}
