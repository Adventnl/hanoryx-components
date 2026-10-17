import { useDrag } from "../../../stage/hooks";
import c from "../glyphs.module.css";
import { Track } from "../shared";

/* ---------- 01 strokes and fills ---------- */

export function StrokeWeight() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.4 });
  return (
    <div className={c.fig}>
      <p className={c.weightWords} style={{ '--w': v }}><span className={c.holl}>Ink</span><span className={c.sol}>Ink</span></p>
      <Track bind={bind} v={v} label="Stroke weight" text={`${(v * 4).toFixed(1)} pixels`} />
    </div>
  );
}
