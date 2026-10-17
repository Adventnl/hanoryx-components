import { useDrag } from "../../../stage/hooks";
import c from "../glyphs.module.css";

export function Leading() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.35 });
  return (
    <div className={c.fig}>
      <div className={c.leadRow}>
        <p className={c.lead} style={{ lineHeight: (0.95 + v * 1.0).toFixed(2) }}>Set the lines close, or let them breathe a little.</p>
        <div {...bind} className={c.vtrack} aria-label="Line height" aria-valuetext={`${(0.95 + v).toFixed(2)}`} style={{ ...bind.style, '--v': v }}><i /></div>
      </div>
    </div>
  );
}
