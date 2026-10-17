import { useState } from 'react';
import { useTick, rng } from "../../../stage/hooks";
import c from "../matrices.module.css";

/* 9 */ const LW = 18;

const LH = 10;

const seeded = (seed) => {
  const r = rng(seed * 97 + 3);
  return Array.from({ length: LW * LH }, () => r() < 0.32);
};

const stepLife = (g) => g.map((on, i) => {
  const x = i % LW;
  const y = Math.floor(i / LW);
  let n = 0;
  for (let dy = -1; dy <= 1; dy += 1) for (let dx = -1; dx <= 1; dx += 1) if (dx || dy) n += g[((y + dy + LH) % LH) * LW + ((x + dx + LW) % LW)] ? 1 : 0;
  return on ? n === 2 || n === 3 : n === 3;
});

export function LifeGrid() {
  const [seed, setSeed] = useState(1);
  const gen = useTick(280) % 90;
  let g = seeded(seed);
  for (let i = 0; i < gen; i += 1) g = stepLife(g);
  return (
    <button type="button" className={c.lifeBtn} aria-label="Life grid, click to start from a new pattern" onClick={() => setSeed(seed + 1)}>
      <span className={c.life}>{g.map((on, i) => <i key={i} data-on={on} />)}</span>
      <em>generation {gen}</em>
    </button>
  );
}
