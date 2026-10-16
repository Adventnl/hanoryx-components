import { useState } from 'react';
import { rng } from '../../stage/hooks';
import { useCell } from '../../stage/chartKit';
import c from './matrices.module.css';

/* 16 */ const MW = 8;

const MH = 6;

const MINES = (() => {
  const r = rng(16);
  const m = Array(MW * MH).fill(false);
  let placed = 0;
  while (placed < 7) { const i = Math.floor(r() * MW * MH); if (!m[i]) { m[i] = true; placed += 1; } }
  return m;
})();

const around = (i) => {
  const x = i % MW;
  const y = Math.floor(i / MW);
  const out = [];
  for (let dy = -1; dy <= 1; dy += 1) for (let dx = -1; dx <= 1; dx += 1) if ((dx || dy) && x + dx >= 0 && x + dx < MW && y + dy >= 0 && y + dy < MH) out.push((y + dy) * MW + x + dx);
  return out;
};

const MINE_COUNT = MINES.map((_, i) => around(i).filter((j) => MINES[j]).length);

const FIRST = Math.max(0, MINE_COUNT.findIndex((n, i) => n === 0 && !MINES[i]));

const reveal = (open, i) => {
  const next = [...open];
  const stack = [i];
  while (stack.length) {
    const j = stack.pop();
    if (!next[j] && !MINES[j]) { next[j] = true; if (!MINE_COUNT[j]) stack.push(...around(j)); }
  }
  return next;
};

export function MineField() {
  const [open, setOpen] = useState(() => reveal(Array(MW * MH).fill(false), FIRST));
  const [lost, setLost] = useState(false);
  const cleared = MINES.every((m, i) => m || open[i]);
  const [at, bind] = useCell(MH, MW, (r, k) => {
    const i = r * MW + k;
    if (lost || cleared) { setOpen(reveal(Array(MW * MH).fill(false), FIRST)); setLost(false); } else if (MINES[i]) setLost(true);
    else setOpen((o) => reveal(o, i));
  });
  return (
    <div className={c.box}>
      <div className={c.mines} {...bind} aria-label="Mine field, click a square to uncover it">
        {MINES.map((m, i) => <i key={i} data-open={open[i] || (lost && m)} data-mine={lost && m} data-at={i === at[0] * MW + at[1]}>{lost && m ? '✕' : open[i] && MINE_COUNT[i] ? MINE_COUNT[i] : ''}</i>)}
      </div>
      <output className={c.out}>{lost ? <b>Boom · click to retry</b> : cleared ? <b>Cleared · click to retry</b> : '7 mines, 41 squares'}</output>
    </div>
  );
}
