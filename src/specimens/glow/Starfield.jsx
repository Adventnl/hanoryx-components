import c from './glow.module.css';

const STARS = Array.from({ length: 22 }, (_, i) => [(i * 37) % 100, (i * 53 + 11) % 100, (i % 5) * 0.5]);

export function Starfield() {
  return (
    <div className={c.fig} role="img" aria-label="A card full of twinkling stars">
      <div className={`${c.card} ${c.stars}`}>
        {STARS.map(([x, y, d], i) => <i key={i} style={{ left: `${x}%`, top: `${y}%`, '--d': `${d}s` }} />)}
        <b>Stars</b>
      </div>
    </div>
  );
}
