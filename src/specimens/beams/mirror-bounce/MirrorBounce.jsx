import { useDrag } from "../../../stage/hooks";
import c from "../beams.module.css";

/* 36 */ export function MirrorBounce() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.4 });
  const a = (v - 0.5) * 70 * (Math.PI / 180);
  const rx = -Math.cos(2 * a);
  const ry = Math.sin(2 * a);
  const L = 60;
  return (
    <div className={c.sw}>
      <svg viewBox="0 0 110 64" className={c.sv} aria-hidden="true">
        <path d="M0 30H70" className={c.white} />
        <path d={`M70 30L${(70 + rx * L).toFixed(1)} ${(30 + ry * L).toFixed(1)}`} className={c.white} style={{ stroke: '#ff9a4d' }} />
        <rect x="68" y="16" width="3" height="28" className={c.mirror} transform={`rotate(${(a * 180) / Math.PI} 70 30)`} />
      </svg>
      <div className={c.rail} {...bind} aria-label="Mirror angle"><u style={{ left: `${v * 100}%` }} /></div>
    </div>
  );
}
