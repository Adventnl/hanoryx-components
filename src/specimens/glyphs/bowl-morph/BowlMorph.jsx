import { useDrag } from "../../../stage/hooks";
import c from "../glyphs.module.css";
import { Track } from "../shared";

const superellipse = (rx, ry, n, steps = 72) => Array.from({ length: steps }, (_, i) => {
  const t = (i / steps) * Math.PI * 2;
  const co = Math.cos(t);
  const si = Math.sin(t);
  return `${i ? 'L' : 'M'}${(50 + rx * Math.sign(co) * Math.abs(co) ** (2 / n)).toFixed(1)} ${(50 + ry * Math.sign(si) * Math.abs(si) ** (2 / n)).toFixed(1)}`;
}).join('') + 'Z';

export function BowlMorph() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.25 });
  const n = 1 + v * 7;
  return (
    <div className={c.fig}>
      <svg className={c.bowl} viewBox="0 0 100 100" role="img" aria-label={`An O whose shape runs from a diamond to a square, at exponent ${n.toFixed(1)}`}>
        <path fillRule="evenodd" d={superellipse(40, 44, n) + superellipse(21, 28, n)} />
      </svg>
      <Track bind={bind} v={v} label="Roundness" text={`exponent ${n.toFixed(1)}`} />
    </div>
  );
}
