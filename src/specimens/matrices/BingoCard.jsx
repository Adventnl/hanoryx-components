import { useState } from 'react';
import { rng } from '../../stage/hooks';
import { useCell } from '../../stage/chartKit';
import c from './matrices.module.css';

/* 12 */ const BINGO = (() => {
  const r = rng(12);
  const col = (j) => {
    const pool = Array.from({ length: 15 }, (_, k) => k + 1 + j * 15);
    return Array.from({ length: 5 }, () => pool.splice(Math.floor(r() * pool.length), 1)[0]);
  };
  const cols = [0, 1, 2, 3, 4].map(col);
  return Array.from({ length: 25 }, (_, i) => (i === 12 ? 0 : cols[i % 5][Math.floor(i / 5)]));
})();

const BINGO_LINES = [...Array.from({ length: 5 }, (_, r) => [0, 1, 2, 3, 4].map((k) => r * 5 + k)), ...Array.from({ length: 5 }, (_, k) => [0, 1, 2, 3, 4].map((r) => r * 5 + k)), [0, 6, 12, 18, 24], [4, 8, 12, 16, 20]];

export function BingoCard() {
  const [stamps, setStamps] = useState([12, 0, 6]);
  const [at, bind] = useCell(5, 5, (r, k) => {
    const i = r * 5 + k;
    if (i !== 12) setStamps((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));
  });
  const won = BINGO_LINES.filter((l) => l.every((i) => i === 12 || stamps.includes(i)));
  const winCells = new Set(won.flat());
  return (
    <div className={c.box}>
      <div className={c.bingo} {...bind} aria-label="Bingo card, click numbers to stamp them">
        {BINGO.map((n, i) => <i key={i} data-st={i === 12 || stamps.includes(i)} data-win={winCells.has(i)} data-at={i === at[0] * 5 + at[1]}>{i === 12 ? '★' : n}</i>)}
      </div>
      <output className={c.out}>{won.length ? <b>Bingo!</b> : `${stamps.filter((i) => i !== 12).length} stamped`}</output>
    </div>
  );
}
