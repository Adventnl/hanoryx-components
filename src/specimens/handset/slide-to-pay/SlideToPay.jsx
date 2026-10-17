import { useDrag } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 29 */ export function SlideToPay() {
  const [v, bind] = useDrag({ mode: 'x', init: 0 });
  return (
    <Phone label="Slide to pay" className={c.center}>
      <b className={c.h}>$42.00</b>
      <span className={c.p}>Blue Door Cafe</span>
      <div className={c.slide} {...bind} aria-label="Slide to pay"><i style={{ left: `${v * 78}%` }}><Ico n="right" /></i><em style={{ opacity: 1 - v }}>slide</em></div>
      <span className={c.p}>{v > 0.95 ? 'Paid' : 'Not paid'}</span>
    </Phone>
  );
}
