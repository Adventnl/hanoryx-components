import { useDrag, pad2 } from "../../../stage/hooks";
import c from "../passes.module.css";

/* 14 */
export function ParkingStub() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.25, steps: 8 });
  const h = Math.round(v * 8);
  const out = 9 * 60 + 12 + h * 60;
  return (
    <div className={c.fig}>
      <div className={c.pk}>
        <span className={c.pkHead}><span className={c.kp}>Parking · lot 3</span><span className={c.kp}>In 09:12</span></span>
        <b className={c.pkHours}>{pad2(h)}<small>h</small></b>
        <span className={c.pkOut}>{h ? `Valid until ${pad2(Math.floor(out / 60))}:${pad2(out % 60)}` : 'Slide to buy time'}</span>
        <span className={c.pkPrice}>{(h * 2.4).toFixed(2)}</span>
      </div>
      <span className={c.pkTrack} {...bind} aria-label="Hours to park" style={{ ...bind.style, '--v': v.toFixed(3) }}><i /></span>
    </div>
  );
}
