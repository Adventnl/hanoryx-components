import { useCell } from "../../../stage/chartKit";
import c from "../figures.module.css";

/* 36 */ const ULAM = (() => {
  const size = 15;
  const grid = Array.from({ length: size }, () => Array(size).fill(0));
  let x = 7;
  let y = 7;
  let n = 1;
  let len = 1;
  const dirs = [[1, 0], [0, -1], [-1, 0], [0, 1]];
  let d = 0;
  grid[y][x] = n;
  while (n < size * size) {
    for (let rep = 0; rep < 2 && n < size * size; rep += 1) {
      for (let s = 0; s < len && n < size * size; s += 1) { x += dirs[d][0]; y += dirs[d][1]; n += 1; if (grid[y]) grid[y][x] = n; }
      d = (d + 1) % 4;
    }
    len += 1;
  }
  return grid;
})();

const isPrime = (n) => { if (n < 2) return false; for (let i = 2; i * i <= n; i += 1) if (n % i === 0) return false; return true; };

export function UlamSpiral() {
  const [at, bind] = useCell(15, 15);
  const sel = at[0] < 0 ? 0 : ULAM[at[0]][at[1]];
  return (
    <div className={c.fig}>
      <div className={c.ulam} {...bind} aria-label="Ulam spiral with the primes lit, move over it or use the arrow keys">
        {ULAM.flat().map((v, i) => <i key={i} data-prime={isPrime(v)} data-sel={v === sel} />)}
      </div>
      <output className={c.sub}>{sel ? <><b>{sel}</b> is {isPrime(sel) ? 'prime' : 'composite'}</> : 'Move over the spiral'}</output>
    </div>
  );
}
