import { rng } from '../../stage/hooks';
import { useCell } from '../../stage/chartKit';
import c from './matrices.module.css';

/* 13 */ const SUDOKU = (() => {
  const r = rng(13);
  return Array.from({ length: 81 }, (_, i) => {
    const row = Math.floor(i / 9);
    const col = i % 9;
    return r() < 0.46 ? 0 : ((row * 3 + Math.floor(row / 3) + col) % 9) + 1;
  });
})();

export function SudokuPeek() {
  const [at, bind] = useCell(9, 9);
  const [r, k] = at;
  const box = (a, b) => Math.floor(a / 3) * 3 + Math.floor(b / 3);
  return (
    <div className={c.box}>
      <div className={c.sudoku} {...bind} aria-label="Sudoku, move over it to light a row, column and box">
        {SUDOKU.map((v, i) => {
          const a = Math.floor(i / 9);
          const b = i % 9;
          return <i key={i} data-hot={r >= 0 && (a === r || b === k || box(a, b) === box(r, k))} data-sel={a === r && b === k}>{v || ''}</i>;
        })}
      </div>
      <output className={c.out}>{r < 0 ? 'Move over the grid' : <>Row {r + 1} · col {k + 1} · box <b>{box(r, k) + 1}</b></>}</output>
    </div>
  );
}
