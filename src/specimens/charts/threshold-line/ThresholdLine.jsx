import { useDrag } from "../../../stage/hooks";
import c from "../charts.module.css";
import { curve, pct, pts, series, smooth3 } from "../shared";

/* 36 */ const TL = pts(smooth3(series(20, 131, 0.1, 0.95)), 100, 52, 3);

const TL_D = curve(TL);

const TL_A = `${TL_D}L100 52L0 52Z`;

export function ThresholdLine() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.55 });
  return (
    <div className={c.thr} {...bind} aria-label="Threshold line, drag up or down" style={{ ...bind.style, '--v': v }}>
      <svg className={c.thrLow} viewBox="0 0 100 52" aria-hidden="true"><path className={c.ar} d={TL_A} /><path className={c.ln} d={TL_D} /></svg>
      <svg className={c.thrHigh} viewBox="0 0 100 52" aria-hidden="true"><path className={`${c.ar} ${c.redFill}`} d={TL_A} /><path className={`${c.ln} ${c.red}`} d={TL_D} /></svg>
      <i /><output className={c.out}>Limit <b>{pct(v)}</b></output>
    </div>
  );
}
