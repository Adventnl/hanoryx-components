import { rng } from '../../stage/hooks';
import c from './graphs.module.css';

/* 31 */ const MZ_W = 11;

const MZ_H = 7;

const MAZE = (() => {
  const r = rng(31);
  const open = new Set();
  const seen = new Set([0]);
  const stack = [0];
  const key = (a, b) => `${Math.min(a, b)}-${Math.max(a, b)}`;
  while (stack.length) {
    const v = stack[stack.length - 1];
    const x = v % MZ_W;
    const y = Math.floor(v / MZ_W);
    const nb = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]].filter(([a, b]) => a >= 0 && a < MZ_W && b >= 0 && b < MZ_H && !seen.has(b * MZ_W + a)).map(([a, b]) => b * MZ_W + a);
    if (!nb.length) { stack.pop(); } else { const w = nb[Math.floor(r() * nb.length)]; open.add(key(v, w)); seen.add(w); stack.push(w); }
  }
  const prev = { 0: -1 };
  const q = [0];
  while (q.length) {
    const v = q.shift();
    const x = v % MZ_W;
    const y = Math.floor(v / MZ_W);
    [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]].forEach(([a, b]) => { const w = b * MZ_W + a; if (a >= 0 && a < MZ_W && b >= 0 && b < MZ_H && !(w in prev) && open.has(key(v, w))) { prev[w] = v; q.push(w); } });
  }
  const path = [];
  for (let v = MZ_W * MZ_H - 1; v >= 0; v = prev[v]) path.unshift(v);
  const walls = [];
  for (let y = 0; y < MZ_H; y += 1) for (let x = 0; x < MZ_W; x += 1) { const v = y * MZ_W + x; if (x + 1 < MZ_W && !open.has(key(v, v + 1))) walls.push(`M${x + 1} ${y}V${y + 1}`); if (y + 1 < MZ_H && !open.has(key(v, v + MZ_W))) walls.push(`M${x} ${y + 1}H${x + 1}`); }
  return { walls: walls.join(''), path: path.map((v, i) => `${i ? 'L' : 'M'}${(v % MZ_W) + 0.5} ${Math.floor(v / MZ_W) + 0.5}`).join('') };
})();

export function MazePath() {
  return (
    <div className={c.fig} role="img" aria-label="A maze with its solution drawing itself">
      <svg className={c.svg} viewBox={`-0.2 -0.2 ${MZ_W + 0.4} ${MZ_H + 0.4}`} aria-hidden="true">
        <rect className={c.mazeFrame} x="0" y="0" width={MZ_W} height={MZ_H} />
        <path className={c.mazeWalls} d={MAZE.walls} />
        <path className={c.mazePath} d={MAZE.path} pathLength="1" />
      </svg>
    </div>
  );
}
