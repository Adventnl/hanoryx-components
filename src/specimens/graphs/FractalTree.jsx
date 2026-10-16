import { useDrag } from '../../stage/hooks';
import { f1 } from '../../stage/chartKit';
import c from './graphs.module.css';

/* 38 */ export function FractalTree() {
  const [v, bind] = useDrag({ init: 0.4 });
  const spread = 12 + v * 46;
  const lines = [];
  const grow = (x, y, len, ang, depth) => {
    const x2 = x + Math.sin((ang * Math.PI) / 180) * len;
    const y2 = y - Math.cos((ang * Math.PI) / 180) * len;
    lines.push(`M${f1(x)} ${f1(y)}L${f1(x2)} ${f1(y2)}`);
    if (depth > 0) { grow(x2, y2, len * 0.72, ang - spread, depth - 1); grow(x2, y2, len * 0.72, ang + spread, depth - 1); }
  };
  grow(50, 96, 20, 0, 7);
  return (
    <div className={c.fig}>
      <svg className={c.svgSq} viewBox="0 0 100 100" role="img" aria-label="A fractal tree"><path className={c.fractal} d={lines.join('')} /></svg>
      <div className={c.slide} {...bind} aria-label="Branch angle, drag to change it" style={{ ...bind.style, '--v': v }}><i /></div>
      <p className={c.sub}>angle <b>{Math.round(spread)}°</b></p>
    </div>
  );
}
