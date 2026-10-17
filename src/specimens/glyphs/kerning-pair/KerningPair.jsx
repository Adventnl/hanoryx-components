import { useDrag } from "../../../stage/hooks";
import c from "../glyphs.module.css";
import { Track } from "../shared";

/* ---------- 03 spacing and rhythm ---------- */

export function KerningPair() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5, steps: 20 });
  const units = Math.round((v - 0.5) * 600);
  return (
    <div className={c.fig}>
      <p className={c.kern} style={{ letterSpacing: `${(units / 1000).toFixed(3)}em` }}>AV</p>
      <Track bind={bind} v={v} label="Kerning between A and V" text={`${units} units`} />
      <span className={c.note}>{units > 0 ? '+' : ''}{units}  /  1000 em</span>
    </div>
  );
}
