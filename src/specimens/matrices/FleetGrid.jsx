import { useState } from 'react';
import { useCell } from '../../stage/chartKit';
import c from './matrices.module.css';

/* 38 */ const SHIPS = [[0, 1, 4, 'h'], [2, 6, 3, 'v'], [5, 2, 3, 'h'], [7, 5, 2, 'h']];

const FLEET = new Set(SHIPS.flatMap(([y, x, n, d]) => Array.from({ length: n }, (_, i) => (d === 'h' ? y * 8 + x + i : (y + i) * 8 + x))));

export function FleetGrid() {
  const [shots, setShots] = useState(() => Array(64).fill(0));
  const hits = shots.filter((s) => s === 2).length;
  const won = hits === FLEET.size;
  const [at, bind] = useCell(8, 8, (r, k) => {
    const i = r * 8 + k;
    if (won) { setShots(Array(64).fill(0)); return; }
    if (!shots[i]) setShots((s) => s.map((v, j) => (j === i ? (FLEET.has(i) ? 2 : 1) : v)));
  });
  return (
    <div className={c.box}>
      <div className={c.fleet} {...bind} aria-label="Fleet grid, click squares to fire">
        {shots.map((s, i) => <i key={i} data-s={s} data-at={i === at[0] * 8 + at[1]} />)}
      </div>
      <output className={c.out}>{won ? <b>Fleet found · click to reset</b> : <>Hits <b>{hits}</b> of {FLEET.size} · shots {shots.filter(Boolean).length}</>}</output>
    </div>
  );
}
