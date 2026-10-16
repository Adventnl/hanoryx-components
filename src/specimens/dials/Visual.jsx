import c from './dials.module.css';

const TICKS = Array.from({ length: 60 }, (_, i) => i);

export function Visual() {
  return (
    <div className={c.big} aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <g className={c.bezel}>
          {TICKS.map((i) => {
            const a = (i * 6 * Math.PI) / 180;
            const r1 = i % 5 === 0 ? 80 : 86;
            return <line key={i} x1={100 + Math.sin(a) * r1} y1={100 - Math.cos(a) * r1} x2={100 + Math.sin(a) * 94} y2={100 - Math.cos(a) * 94} />;
          })}
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            return <text key={i} x={100 + Math.sin(a) * 68} y={100 - Math.cos(a) * 68 + 3} textAnchor="middle">{i === 0 ? 12 : i}</text>;
          })}
        </g>
        <circle className={c.ring} cx="100" cy="100" r="54" />
        <circle className={c.sweep} cx="100" cy="100" r="46" pathLength="1" />
        <g className={c.needle}><path d="M100 22 L96 100 H104 Z" /><circle cx="100" cy="100" r="6" /></g>
      </svg>
    </div>
  );
}
