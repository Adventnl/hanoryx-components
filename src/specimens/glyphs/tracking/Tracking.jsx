import { useDrag } from "../../../stage/hooks";
import c from "../glyphs.module.css";
import { Track } from "../shared";

export function Tracking() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.25 });
  return (
    <div className={c.fig}>
      <p className={c.track2} style={{ letterSpacing: `${(-0.04 + v * 0.5).toFixed(3)}em` }}>SPACE</p>
      <Track bind={bind} v={v} label="Letter spacing" text={`${Math.round((-0.04 + v * 0.5) * 1000)} units`} />
    </div>
  );
}
