import c from './morphs.module.css';
import { S } from './shared';

/* the still side: circle, then star, then square, blended by the scroll */
export function Visual() {
  const pts = S.circle.map(([x, y], i) => [x, y, S.star8[i][0], S.star8[i][1], S.square[i][0], S.square[i][1]]);
  const at = (a, b, d) => `calc(${a.toFixed(1)}% + ${(b - a).toFixed(1)}% * var(--t1) + ${(d - b).toFixed(1)}% * var(--t2))`;
  const clip = `polygon(${pts.map(([x0, y0, x1, y1, x2, y2]) => `${at(x0, x1, x2)} ${at(y0, y1, y2)}`).join(',')})`;
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.visShape} style={{ clipPath: clip }} />
      <small>32 POINTS · 3 OUTLINES</small>
    </div>
  );
}
