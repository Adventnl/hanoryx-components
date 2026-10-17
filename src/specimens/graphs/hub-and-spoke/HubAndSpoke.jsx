import { polar } from "../../../stage/chartKit";
import c from "../graphs.module.css";

/* 11 */ export function HubAndSpoke() {
  return (
    <div className={c.fig} role="img" aria-label="A hub sending pulses down eight spokes">
      <svg className={c.svgSq} viewBox="0 0 100 100" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => {
          const [x, y] = polar(50, 50, 40, i * 45);
          return (
            <g key={i}>
              <line className={c.edge} x1="50" y1="50" x2={x} y2={y} />
              <circle className={c.nd} cx={x} cy={y} r="3" />
              <circle className={c.pulse} cx="50" cy="50" r="1.4" style={{ '--dx': x - 50, '--dy': y - 50, animationDelay: `${i * 0.22}s` }} />
            </g>
          );
        })}
        <circle className={c.core} cx="50" cy="50" r="5" />
      </svg>
    </div>
  );
}
