import { rng } from '../../stage/hooks';
import c from './charts.module.css';
import { curve, f1 } from './shared';

/* 18 */ const RIDGE = Array.from({ length: 8 }, (_, k) => {
  const r = rng(90 + k);
  const p = Array.from({ length: 21 }, (_, j) => {
    const x = j / 20;
    const v = Math.exp(-(((x - (0.25 + r() * 0.5)) / 0.12) ** 2)) * (0.5 + r() * 0.5) + Math.exp(-(((x - (0.2 + r() * 0.6)) / 0.18) ** 2)) * 0.35 + r() * 0.05;
    return [f1(x * 100), f1(12 - v * 11)];
  });
  return `${curve(p)}L100 12L0 12Z`;
});

export function Ridgeline() {
  return (
    <div className={c.ch} role="img" aria-label="Ridgeline plot with breathing ridges">
      <svg viewBox="0 0 100 60" aria-hidden="true">
        {RIDGE.map((d, k) => <g key={k} transform={`translate(0 ${k * 6})`}><path className={c.ridge} style={{ animationDelay: `${-k * 0.7}s` }} d={d} /></g>)}
      </svg>
    </div>
  );
}
