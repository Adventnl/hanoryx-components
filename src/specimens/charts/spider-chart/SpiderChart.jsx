import { useState } from 'react';
import c from "../charts.module.css";
import { polar } from "../shared";

/* 12 */ const SPIDER = [[0.8, 0.6, 0.9, 0.5, 0.7, 0.4], [0.5, 0.85, 0.4, 0.8, 0.45, 0.75], [0.65, 0.65, 0.65, 0.9, 0.35, 0.55]];

const SPIDER_AX = ['Reach', 'Speed', 'Depth', 'Cost', 'Trust', 'Fit'];

const spiderPath = (v) => `${v.map((r, i) => `${i ? 'L' : 'M'}${polar(50, 50, 6 + r * 34, i * 60).join(' ')}`).join('')}Z`;

export function SpiderChart() {
  const [k, setK] = useState(0);
  const d = spiderPath(SPIDER[k]);
  return (
    <button type="button" className={c.chBtn} aria-label={`Spider chart, dataset ${k + 1} of 3. Click to change`} onClick={() => setK((k + 1) % 3)}>
      <svg className={c.spider} viewBox="-14 -2 128 104" aria-hidden="true">
        {[0.25, 0.5, 0.75, 1].map((s) => <path key={s} className={c.gr} d={spiderPath(Array(6).fill(s))} />)}
        {SPIDER_AX.map((n, i) => {
          const [x1, y1] = polar(50, 50, 40, i * 60);
          const [tx, ty] = polar(50, 50, 47, i * 60);
          return (
            <g key={n}>
              <line className={c.gr} x1="50" y1="50" x2={x1} y2={y1} />
              <text className={c.t} x={tx} y={ty} textAnchor={tx < 46 ? 'end' : tx > 54 ? 'start' : 'middle'} dominantBaseline="central">{n}</text>
            </g>
          );
        })}
        <path className={`${c.ar} ${c.redFill} ${c.morph}`} d={d} style={{ d: `path("${d}")` }} />
        <path className={`${c.ln} ${c.red} ${c.morph}`} d={d} style={{ d: `path("${d}")` }} />
      </svg>
    </button>
  );
}
