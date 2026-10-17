import { useToggle } from "../../../stage/hooks";
import c from "../passes.module.css";

/* 40 */
export function Wristband() {
  const [on, flip] = useToggle(false);
  return (
    <div className={c.fig}>
      <button type="button" className={c.wb} data-on={on} aria-pressed={on} aria-label="Wristband: press to fasten or open the clasp" onClick={flip}>
        <span className={`${c.wbHalf} ${c.wbL}`}><span>ALL ACCESS</span></span>
        <span className={`${c.wbHalf} ${c.wbR}`}><span>DAY TWO</span></span>
        <i className={c.wbRivet} />
      </button>
      <p className={c.k}>{on ? 'Fastened' : 'Open'}</p>
    </div>
  );
}
