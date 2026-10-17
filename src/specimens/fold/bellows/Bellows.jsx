import { useDrag } from "../../../stage/hooks";
import c from "../fold.module.css";

export function Bellows() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5 });
  const s = 3.4 + v * 8;
  const n = 9;
  return (
    <div className={c.fig}>
      <svg className={c.bell} viewBox="0 0 130 40" role="img" aria-label="Bellows that stretch and squeeze">
        <rect x="4" y="4" width="4" height="32" rx="1" />
        {Array.from({ length: n }, (_, i) => {
          const x0 = 10 + i * s;
          const x1 = x0 + s;
          const hi = i % 2 === 0;
          return <polygon key={i} data-hi={hi} points={`${x0},${hi ? 4 : 10} ${x1},${hi ? 10 : 4} ${x1},${hi ? 30 : 36} ${x0},${hi ? 36 : 30}`} />;
        })}
        <rect x={10 + n * s} y="4" width="4" height="32" rx="1" />
      </svg>
      <div {...bind} className={c.track} aria-label="Stretch" aria-valuetext={`${Math.round(v * 100)} percent`} style={{ ...bind.style, '--v': v }}><i /></div>
    </div>
  );
}
