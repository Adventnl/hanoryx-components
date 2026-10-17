import { useState } from 'react';
import { useCell } from "../../../stage/chartKit";
import c from "../matrices.module.css";

/* 36 */ const LINES3 = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const winner = (b) => { const l = LINES3.find(([x, y, z]) => b[x] && b[x] === b[y] && b[x] === b[z]); return l ? b[l[0]] : null; };

const reply = (b) => {
  const free = b.map((v, i) => (v ? -1 : i)).filter((i) => i >= 0);
  const wins = (who) => free.find((i) => winner(b.map((v, j) => (j === i ? who : v))) === who);
  const pick = wins('O') ?? wins('X') ?? [4, 0, 2, 6, 8, 1, 3, 5, 7].find((i) => free.includes(i));
  return pick === undefined ? b : b.map((v, i) => (i === pick ? 'O' : v));
};

export function NoughtsGrid() {
  const [b, setB] = useState(Array(9).fill(''));
  const w = winner(b);
  const over = w || b.every(Boolean);
  const [at, bind] = useCell(3, 3, (r, k) => {
    const i = r * 3 + k;
    if (over) { setB(Array(9).fill('')); return; }
    if (b[i]) return;
    const next = b.map((v, j) => (j === i ? 'X' : v));
    setB(winner(next) || next.every(Boolean) ? next : reply(next));
  });
  return (
    <div className={c.box}>
      <div className={c.noughts} {...bind} aria-label="Noughts and crosses, click a square to play X">
        {b.map((v, i) => <i key={i} data-v={v} data-at={i === at[0] * 3 + at[1]}>{v}</i>)}
      </div>
      <output className={c.out}>{w ? <b>{w === 'X' ? 'You win' : 'O wins'} · click to restart</b> : over ? <b>Draw · click to restart</b> : 'Your move, X'}</output>
    </div>
  );
}
