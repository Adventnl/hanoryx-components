import c from "../figures.module.css";

/* 33 */ const FIB_TILES = (() => {
  const sides = ['right', 'top', 'left', 'bottom'];
  let box = { x0: 0, y0: 0, x1: 1, y1: 1 };
  const tiles = [{ s: 1, x: 0, y: 0 }];
  [1, 2, 3, 5, 8, 13, 21].forEach((s, i) => {
    const side = sides[i % 4];
    const t = side === 'right' ? { s, x: box.x1, y: box.y0 } : side === 'top' ? { s, x: box.x0, y: box.y0 - s } : side === 'left' ? { s, x: box.x0 - s, y: box.y0 } : { s, x: box.x0, y: box.y1 };
    tiles.push(t);
    box = { x0: Math.min(box.x0, t.x), y0: Math.min(box.y0, t.y), x1: Math.max(box.x1, t.x + s), y1: Math.max(box.y1, t.y + s) };
  });
  return { tiles, box };
})();

export function FibonacciTiles() {
  const { tiles, box } = FIB_TILES;
  return (
    <div className={c.fig} role="img" aria-label="Squares sized by the Fibonacci numbers, spiralling out">
      <svg className={c.fibSvg} viewBox={`${box.x0 - 0.3} ${box.y0 - 0.3} ${box.x1 - box.x0 + 0.6} ${box.y1 - box.y0 + 0.6}`} aria-hidden="true">
        {tiles.map((t, i) => (
          <g key={i} className={c.fibTile} style={{ '--i': i }}>
            <rect x={t.x} y={t.y} width={t.s} height={t.s} />
            <text x={t.x + t.s / 2} y={t.y + t.s / 2} textAnchor="middle" dominantBaseline="central" style={{ fontSize: Math.max(0.9, t.s * 0.34) }}>{t.s}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
