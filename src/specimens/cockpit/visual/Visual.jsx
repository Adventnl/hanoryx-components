import { polar } from "../../../stage/chartKit";
import c from "../cockpit.module.css";

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      <div className={c.card}>
        <svg viewBox="0 0 100 100">
          {Array.from({ length: 72 }, (_, k) => { const [x1, y1] = polar(50, 50, 46, k * 5); const [x2, y2] = polar(50, 50, k % 6 === 0 ? 38 : 42, k * 5); return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} className={k % 6 === 0 ? c.major : undefined} />; })}
          {['N', 'E', 'S', 'W'].map((t, k) => { const [x, y] = polar(50, 50, 31, k * 90); return <text key={t} x={x} y={y} textAnchor="middle" dominantBaseline="central" transform={`rotate(${k * 90} ${x} ${y})`}>{t}</text>; })}
        </svg>
      </div>
      <i className={c.lubber} />
      <b className={c.plane} />
      <output className={c.hdg} />
      <small>1 CARD · 360°</small>
    </div>
  );
}
