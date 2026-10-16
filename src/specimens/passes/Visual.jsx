import { rng } from '../../stage/hooks';
import c from './passes.module.css';

/* ---- the medallion on the line: a code that prints as you scroll ---- */
const QR_N = 15;

const QR = (() => {
  const r = rng(404);
  const out = [];
  const finder = (y0, x0) => {
    for (let y = 0; y < 5; y += 1) {
      for (let x = 0; x < 5; x += 1) {
        if (x === 0 || y === 0 || x === 4 || y === 4 || (x === 2 && y === 2)) out.push({ x: x0 + x, y: y0 + y, d: 0.02 + (y * 5 + x) * 0.002 });
      }
    }
  };
  finder(0, 0); finder(0, 10); finder(10, 0);
  for (let y = 0; y < 5; y += 1) {
    for (let x = 0; x < 5; x += 1) {
      if (x === 0 || y === 0 || x === 4 || y === 4 || (x === 2 && y === 2)) out.push({ x: 9 + x, y: 9 + y, d: 0.05 + y * 0.01 });
    }
  }
  for (let y = 0; y < QR_N; y += 1) {
    for (let x = 0; x < QR_N; x += 1) {
      const inFinder = (y < 6 && (x < 6 || x > 8)) || (y > 8 && x < 6);
      const inAlign = x >= 9 && x <= 13 && y >= 9 && y <= 13;
      if (inFinder || inAlign) continue;
      if (r() < 0.5) out.push({ x, y, d: 0.08 + (y / QR_N) * 0.76 + r() * 0.1 });
    }
  }
  return out;
})();

export function Visual() {
  return (
    <div className={c.medal} aria-hidden="true">
      <i className={c.medalRing} />
      {Array.from({ length: 42 }, (_, i) => <i key={i} className={c.punch} style={{ '--i': i }} />)}
      <p className={c.medalTop}>Admit one</p>
      <div className={c.qr}>
        {QR.map((q) => <i key={`${q.x}.${q.y}`} style={{ '--x': q.x, '--y': q.y, '--d': q.d.toFixed(3) }} />)}
        <b className={c.beam} />
      </div>
      <p className={c.medalNo} />
      <p className={c.valid}>Valid</p>
    </div>
  );
}
