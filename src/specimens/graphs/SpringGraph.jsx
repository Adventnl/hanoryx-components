import { usePrefersReducedMotion } from '../../core/hooks/usePrefersReducedMotion';
import { useEffect, useRef } from 'react';
import { useLive, clamp } from '../../stage/hooks';
import c from './graphs.module.css';

/* 1 */ const SP_NODES = [[50, 50], [24, 28], [76, 28], [18, 66], [82, 66], [50, 14], [50, 86], [34, 52], [66, 52]];

const SP_EDGES = [[0, 1], [0, 2], [0, 3], [0, 4], [1, 5], [2, 5], [3, 6], [4, 6], [0, 7], [0, 8], [7, 1], [8, 2]];

export function SpringGraph() {
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  const svg = useRef(null);
  const nodes = useRef(SP_NODES.map(([x, y]) => ({ x, y, vx: 0, vy: 0 })));
  const dots = useRef([]);
  const lines = useRef([]);
  const grab = useRef(-1);
  const paint = () => {
    const positions = nodes.current;
    positions.forEach((node, i) => dots.current[i]?.setAttribute('transform', `translate(${node.x.toFixed(2)} ${node.y.toFixed(2)})`));
    SP_EDGES.forEach(([a, b], i) => {
      const line = lines.current[i];
      if (line) { line.setAttribute('x1', positions[a].x); line.setAttribute('y1', positions[a].y); line.setAttribute('x2', positions[b].x); line.setAttribute('y2', positions[b].y); }
    });
  };
  useEffect(() => {
    if (!live || reduced) return undefined;
    let raf = 0;
    const frame = () => {
      const p = nodes.current;
      SP_EDGES.forEach(([a, b]) => {
        const dx = p[b].x - p[a].x;
        const dy = p[b].y - p[a].y;
        const d = Math.hypot(dx, dy) || 1;
        const f = (d - 24) * 0.03;
        p[a].vx += (dx / d) * f; p[a].vy += (dy / d) * f; p[b].vx -= (dx / d) * f; p[b].vy -= (dy / d) * f;
      });
      for (let i = 0; i < p.length; i += 1) {
        for (let j = i + 1; j < p.length; j += 1) {
          const dx = p[j].x - p[i].x;
          const dy = p[j].y - p[i].y;
          const d = Math.hypot(dx, dy) || 1;
          const f = 90 / (d * d);
          p[i].vx -= (dx / d) * f; p[i].vy -= (dy / d) * f; p[j].vx += (dx / d) * f; p[j].vy += (dy / d) * f;
        }
      }
      p.forEach((n, i) => {
        if (i === grab.current) { n.vx = 0; n.vy = 0; return; }
        n.vx = (n.vx + (50 - n.x) * 0.004) * 0.86;
        n.vy = (n.vy + (50 - n.y) * 0.004) * 0.86;
        n.x = clamp(n.x + n.vx, 5, 95);
        n.y = clamp(n.y + n.vy, 5, 95);
      });
      p.forEach((n, i) => dots.current[i]?.setAttribute('transform', `translate(${n.x.toFixed(2)} ${n.y.toFixed(2)})`));
      SP_EDGES.forEach(([a, b], i) => {
        const l = lines.current[i];
        if (l) { l.setAttribute('x1', p[a].x.toFixed(2)); l.setAttribute('y1', p[a].y.toFixed(2)); l.setAttribute('x2', p[b].x.toFixed(2)); l.setAttribute('y2', p[b].y.toFixed(2)); }
      });
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [live, reduced]);
  const toSvg = (e) => {
    const r = svg.current.getBoundingClientRect();
    return [((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100];
  };
  return (
    <div className={c.fig}>
      <svg ref={svg} className={`${c.svg} ${c.spring}`} viewBox="0 0 100 100" onPointerMove={(e) => { if (grab.current >= 0) { const [x, y] = toSvg(e); Object.assign(nodes.current[grab.current], { x: clamp(x, 4, 96), y: clamp(y, 4, 96) }); if (reduced) paint(); } }} onPointerUp={() => { grab.current = -1; }} onPointerLeave={() => { grab.current = -1; }}>
        {SP_EDGES.map(([a, b], i) => <line key={i} ref={(el) => { lines.current[i] = el; }} className={c.edge} x1={SP_NODES[a][0]} y1={SP_NODES[a][1]} x2={SP_NODES[b][0]} y2={SP_NODES[b][1]} />)}
        {SP_NODES.map(([x, y], i) => (
          <g key={i} ref={(el) => { dots.current[i] = el; }} transform={`translate(${x} ${y})`}>
            <circle className={c.grab} r="4.6" tabIndex={0} role="button" aria-roledescription="draggable node" aria-label={`Node ${i + 1}, drag it or use the arrow keys`}
              onPointerDown={(e) => { grab.current = i; e.currentTarget.setPointerCapture?.(e.pointerId); }}
              onKeyDown={(e) => { const d = { ArrowLeft: [-5, 0], ArrowRight: [5, 0], ArrowUp: [0, -5], ArrowDown: [0, 5] }[e.key]; if (d) { e.preventDefault(); nodes.current[i].x = clamp(nodes.current[i].x + d[0], 4, 96); nodes.current[i].y = clamp(nodes.current[i].y + d[1], 4, 96); if (reduced) paint(); } }} />
          </g>
        ))}
      </svg>
    </div>
  );
}
