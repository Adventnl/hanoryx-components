import { rng } from '../../stage/hooks';
import { usePointer } from '../../stage/pointerVars';
import c from './beams.module.css';
import { cx } from './shared';

/* 26 */ export function Plexus() {
  const [ref, bind] = usePointer();
  const pts = Array.from({ length: 12 }, (_, i) => [rng(i + 5)() * 100 + 5, rng(i + 40)() * 54 + 5]);
  const links = [];
  pts.forEach((a, i) => pts.forEach((b, j) => { if (j > i && Math.hypot(a[0] - b[0], a[1] - b[1]) < 30) links.push([a, b, `${i}-${j}`]); }));
  return (
    <div ref={ref} {...bind} className={cx(c.sw, c.plex)} tabIndex={0} role="img" aria-label="A network of points that glows near the pointer">
      <svg viewBox="0 0 110 64" className={c.sv} aria-hidden="true">
        {links.map(([a, b, k]) => <line key={k} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} className={c.link} />)}
        {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.8" className={c.node} />)}
      </svg>
      <i />
    </div>
  );
}
