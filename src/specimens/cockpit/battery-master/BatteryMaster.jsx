import { useToggle } from "../../../stage/hooks";
import c from "../cockpit.module.css";

/* 38 */ export function BatteryMaster() {
  const [on, flip] = useToggle();
  return (
    <div className={c.master}>
      <button type="button" role="switch" aria-checked={on} aria-label="Battery master" onClick={flip}><i /></button>
      <span data-on={on}>{on ? '13.8 V' : '— — —'}</span>
    </div>
  );
}
