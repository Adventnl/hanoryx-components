import { useDrag } from "../../../stage/hooks";
import c from "../glyphs.module.css";

const ALPHA = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

export function AlphabetStrip() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.35 });
  return (
    <div className={c.fig}>
      <div {...bind} className={c.alpha} aria-label="Drag along the alphabet" aria-valuetext={ALPHA[Math.round(v * 25)]} style={{ ...bind.style }}>
        {ALPHA.map((ch, i) => <i key={ch} style={{ '--s': (1 + 2.2 * Math.exp(-(((i / 25 - v) * 9) ** 2))).toFixed(2) }}>{ch}</i>)}
      </div>
    </div>
  );
}
