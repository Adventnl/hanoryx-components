import { useDrag } from "../../../stage/hooks";
import c from "../glyphs.module.css";
import { Track } from "../shared";

export function ItalicAngle() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5 });
  const deg = Math.round(v * 24);
  return (
    <div className={c.fig}>
      <p className={c.slant} style={{ transform: `skewX(${-deg}deg)` }}>Rag</p>
      <Track bind={bind} v={v} label="Slant angle" text={`${deg} degrees`} />
      <span className={c.note}>{deg}°</span>
    </div>
  );
}
