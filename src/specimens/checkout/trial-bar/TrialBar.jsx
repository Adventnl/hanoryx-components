import { useTick } from "../../../stage/hooks";
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 12 */ export function TrialBar() {
  const n = useTick(1400);
  const left = 14 - (n % 14);
  return (
    <Co label="Trial banner" className={c.center} role="status">
      <span className={c.m}>Free trial</span>
      <span className={c.bar}><i style={{ width: `${((14 - left) / 14) * 100}%` }} /></span>
      <b>{left} days left</b>
      <button type="button" className={c.pay}>Upgrade</button>
    </Co>
  );
}
