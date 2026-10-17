import { useToggle } from "../../../stage/hooks";
import c from "../fold.module.css";

export function Perforation() {
  const [on, flip] = useToggle(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="A coupon with a perforated end; tear it off" onClick={flip}>
      <span className={c.coupon} data-on={on}>
        <i className={c.cmain}><b>Coupon</b></i>
        <i className={c.cstub}><b>Stub</b></i>
      </span>
    </button>
  );
}
