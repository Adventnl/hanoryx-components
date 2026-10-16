import c from './charts.module.css';
import { f1, polar } from './shared';

/* 39 */ const SPIRAL = Array.from({ length: 70 }, (_, k) => {
  const [x, y] = polar(50, 50, 5 + k * 0.58, k * 21);
  return { x, y, s: f1(0.8 + ((Math.sin(k * 0.9) + 1) / 2) * 2.2), red: k % 11 === 0 };
});

export function SpiralPlot() {
  return (
    <div className={c.spiral} role="img" aria-label="A spiral of dots turning slowly">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <g className={c.turn}>{SPIRAL.map((d, k) => <circle key={k} data-red={d.red} cx={d.x} cy={d.y} r={d.s} />)}</g>
      </svg>
    </div>
  );
}
