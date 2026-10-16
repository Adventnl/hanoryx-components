import { useState } from 'react';
import c from './switchboard.module.css';

/* 37 */ export function Crossbar() {
  const [grid, setGrid] = useState(() => [0, 4, 8]);
  const toggle = (n) => setGrid((g) => (g.includes(n) ? g.filter((x) => x !== n) : [...g, n]));
  return (
    <div className={c.cross}>
      {Array.from({ length: 9 }, (_, n) => <button type="button" key={n} aria-pressed={grid.includes(n)} aria-label={`Crosspoint ${Math.floor(n / 3) + 1},${(n % 3) + 1}`} onClick={() => toggle(n)} />)}
    </div>
  );
}
