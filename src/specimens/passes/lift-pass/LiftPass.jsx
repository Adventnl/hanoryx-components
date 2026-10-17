import c from "../passes.module.css";
import { useFlash } from "../shared";

/* 39 */
export function LiftPass() {
  const [go, fire] = useFlash(2200);
  return (
    <div className={c.fig}>
      <div className={c.lp} data-go={go}>
        <span className={c.lpCard}>
          <svg viewBox="0 0 60 24" aria-hidden="true"><path d="M0 24 14 6l8 10 10-14 14 18 8-6 6 10z" /></svg>
          <b>Day lift pass</b>
          <span className={c.kd}>Valid 14 Oct</span>
        </span>
        <span className={c.lpGate}><i className={c.lpArm} /><i className={c.lpLed} /></span>
      </div>
      <p className={c.row}><button type="button" className={c.btn} onClick={fire}>Scan at gate</button></p>
    </div>
  );
}
