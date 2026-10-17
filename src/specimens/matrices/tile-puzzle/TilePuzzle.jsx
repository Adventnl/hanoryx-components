import { useState } from 'react';
import { useCell } from "../../../stage/chartKit";
import c from "../matrices.module.css";

/* 15 */ const SOLVED = [1, 2, 3, 4, 5, 6, 7, 8, 0];

const slide = (t, i) => {
  const b = t.indexOf(0);
  const near = Math.abs((b % 3) - (i % 3)) + Math.abs(Math.floor(b / 3) - Math.floor(i / 3)) === 1;
  return near ? t.map((v, j) => (j === b ? t[i] : j === i ? 0 : v)) : t;
};

const PUZZLE_START = [7, 4, 3, 7, 8, 5, 4, 1, 0, 3, 4, 5, 8].reduce((t, k) => {
  const b = t.indexOf(0);
  const choices = [b - 3, b + 3, b % 3 ? b - 1 : -1, b % 3 < 2 ? b + 1 : -1].filter((x) => x >= 0 && x < 9);
  return slide(t, choices[k % choices.length]);
}, SOLVED);

export function TilePuzzle() {
  const [t, setT] = useState(PUZZLE_START);
  const solved = t.every((v, i) => v === SOLVED[i]);
  const [, bind] = useCell(3, 3, (r, k) => setT((p) => (solved ? PUZZLE_START : slide(p, r * 3 + k))));
  return (
    <div className={c.box}>
      <div className={c.puzzle} {...bind} aria-label="Sliding puzzle, click a tile beside the gap to slide it" data-solved={solved}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
          const i = t.indexOf(n);
          return <b key={n} style={{ '--x': i % 3, '--y': Math.floor(i / 3) }}>{n}</b>;
        })}
      </div>
      <output className={c.out}>{solved ? <b>Solved · click to shuffle</b> : 'Put the numbers in order'}</output>
    </div>
  );
}
