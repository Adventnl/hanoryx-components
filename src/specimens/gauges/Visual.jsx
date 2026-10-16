import c from './gauges.module.css';
import { arc, pt } from './shared';

/* ---- the pinned dial stack ---- */
const RAYS = Array.from({ length: 72 }, (_, i) => {
  const [x1, y1] = pt(100, 100, 90, i * 5);
  const [x2, y2] = pt(100, 100, 98, i * 5);
  return { i, x1, y1, x2, y2 };
});

export function Visual() {
  return (
    <div className={c.big} aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <g className={c.rays}>{RAYS.map((l) => <line key={l.i} style={{ '--i': l.i }} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />)}</g>
        <path className={c.bigRail} d={arc(100, 100, 78, -135, 135)} />
        <path className={c.bigRun} d={arc(100, 100, 78, -135, 135)} pathLength="1" />
        <path className={c.bigRail} d={arc(100, 100, 66, -135, 135)} />
        <path className={c.bigRun2} d={arc(100, 100, 66, -135, 135)} pathLength="1" />
        <circle className={c.bigDash} cx="100" cy="100" r="53" pathLength="1" />
        <circle className={c.bigDash2} cx="100" cy="100" r="46" pathLength="1" />
        <g className={c.bigNeedle}><path d="M100 26 L96.2 100 H103.8Z" /><circle cx="100" cy="100" r="7.5" /></g>
      </svg>
      <p className={c.readout}><b className={c.bigNum} /><i>% load</i></p>
    </div>
  );
}
