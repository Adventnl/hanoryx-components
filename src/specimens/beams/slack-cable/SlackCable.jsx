import { useDrag } from "../../../stage/hooks";
import c from "../beams.module.css";
import { Lit, cx } from "../shared";

/* 41 */ export function SlackCable() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.35 });
  const d = `M6 12Q55 ${12 + (1 - v) * 80} 104 12`;
  return (
    <div className={c.sw}>
      <svg viewBox="0 0 110 64" className={c.sv} aria-hidden="true"><Lit d={d} dur={2.4} len={14} w={1.8} /></svg>
      <div className={cx(c.rail, c.railV)} {...bind} aria-label="Cable slack"><u style={{ bottom: `${v * 100}%` }} /></div>
    </div>
  );
}
