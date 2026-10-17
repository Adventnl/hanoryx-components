import { useDrag } from "../../../stage/hooks";
import c from "../glyphs.module.css";
import { Track } from "../shared";

export function WordSpacing() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.3 });
  const ws = -0.15 + v * 1.15;
  return (
    <div className={c.fig}>
      <p className={c.words} style={{ wordSpacing: `${ws.toFixed(2)}em` }}>Space between words is part of the rhythm</p>
      <Track bind={bind} v={v} label="Word spacing" text={`${ws.toFixed(2)} em`} />
      <span className={c.note}>word space {ws > 0 ? '+' : ''}{ws.toFixed(2)} em</span>
    </div>
  );
}
