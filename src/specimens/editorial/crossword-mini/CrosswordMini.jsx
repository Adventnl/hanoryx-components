import { useState } from 'react';
import c from "../editorial.module.css";

const CROSS = [[1, 1, 1, 0], [1, 0, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]];

export function CrosswordMini() {
  const [cells, setCells] = useState(() => CROSS.map((r) => r.map(() => '')));
  const set = (r, k, v) => setCells((cs) => cs.map((row, i) => row.map((x, j) => (i === r && j === k ? v : x))));
  return (
    <div className={c.fig}>
      <div className={c.cross} role="group" aria-label="Mini crossword; type letters into the open squares">
        {CROSS.map((row, r) => row.map((open, k) => (open
          ? <input key={`${r}-${k}`} value={cells[r][k]} maxLength={1} aria-label={`Row ${r + 1}, column ${k + 1}`} onChange={(e) => set(r, k, e.target.value.toUpperCase().slice(-1))} onFocus={(e) => e.target.select()} autoComplete="off" />
          : <i key={`${r}-${k}`} aria-hidden="true" />)))}
      </div>
    </div>
  );
}
