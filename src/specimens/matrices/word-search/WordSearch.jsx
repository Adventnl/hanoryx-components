import { useState } from 'react';
import { rng } from "../../../stage/hooks";
import c from "../matrices.module.css";

/* 34 */ const WORDS = [['GRID', 0, 1, 0, 1], ['CELL', 1, 6, 1, 0], ['DOT', 5, 0, 0, 1], ['BIT', 7, 2, 0, 1], ['ROW', 2, 0, 1, 1]];

const SEARCH = (() => {
  const r = rng(34);
  const g = Array.from({ length: 64 }, () => String.fromCharCode(65 + Math.floor(r() * 26)));
  WORDS.forEach(([w, y, x, dy, dx]) => [...w].forEach((ch, i) => { g[(y + dy * i) * 8 + x + dx * i] = ch; }));
  return g;
})();

const wordCells = ([w, y, x, dy, dx]) => [...w].map((_, i) => (y + dy * i) * 8 + x + dx * i);

export function WordSearch() {
  const [k, setK] = useState(0);
  const lit = wordCells(WORDS[k]);
  return (
    <div className={c.search}>
      <div className={c.letters} role="img" aria-label="Eight by eight letter grid">
        {SEARCH.map((ch, i) => <i key={i} data-lit={lit.includes(i)}>{ch}</i>)}
      </div>
      <ul>
        {WORDS.map(([w], i) => <li key={w}><button type="button" aria-pressed={k === i} onClick={() => setK(i)}>{w}</button></li>)}
      </ul>
    </div>
  );
}
