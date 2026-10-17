import { useDrag } from "../../../stage/hooks";
import c from "../passes.module.css";

/* 19 */
export function KeyCardSwipe() {
  const [v, bind, set] = useDrag({ mode: 'x', init: 0 });
  const granted = v >= 0.9;
  const release = () => set(granted ? 1 : 0);
  return (
    <div className={c.fig}>
      <div className={c.ks} {...bind} data-state={granted ? 'ok' : v > 0.05 ? 'read' : 'idle'} aria-label="Key card reader: drag the card along the reader to the end" style={{ ...bind.style, '--v': v.toFixed(3) }} onPointerUp={release} onPointerCancel={release}>
        <span className={c.ksLed}><i /><span className={c.kd}>{granted ? 'Access' : v > 0.05 ? 'Reading' : 'Swipe'}</span></span>
        <span className={c.ksCard}><span className={c.ksStripe} /><span className={c.kd}>Room 214</span><b>Key</b></span>
      </div>
      <p className={c.row}><button type="button" className={c.btn} onClick={() => set(0)}>Again</button></p>
    </div>
  );
}
