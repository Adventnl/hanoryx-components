import c from "../popovers.module.css";
import { useTip } from "../shared";

/* 16 */ export function LinkPreview() {
  const [open, bind] = useTip(250);
  return (
    <span className={c.wrap} {...bind}>
      <a href="#lp" className={c.handle} onClick={(e) => e.preventDefault()}>hanoryx.systems</a>
      <span role="tooltip" className={`${c.card} ${c.bottom}`} data-open={open}><i className={c.shot} /><b>Hanoryx Systems</b><small>hanoryx.systems</small></span>
    </span>
  );
}
