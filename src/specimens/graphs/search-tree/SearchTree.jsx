import { useState } from 'react';
import c from "../graphs.module.css";

/* 21 */ const bstInsert = (t, v) => (!t ? { v, l: null, r: null } : v < t.v ? { ...t, l: bstInsert(t.l, v) } : v > t.v ? { ...t, r: bstInsert(t.r, v) } : t);

export function SearchTree() {
  const [text, setText] = useState('50 30 70 20 40 60 80');
  const nums = text.split(/[\s,]+/).map(Number).filter((n) => Number.isFinite(n) && n >= 0 && n < 1000).slice(0, 14);
  const root = nums.reduce(bstInsert, null);
  const nodes = [];
  let order = 0;
  const walk = (t, depth, parent) => { if (!t) return; walk(t.l, depth + 1, t); const me = { v: t.v, depth, x: order, parent }; order += 1; nodes.push(me); walk(t.r, depth + 1, t); };
  walk(root, 0, null);
  const byV = Object.fromEntries(nodes.map((n) => [n.v, n]));
  const X = (n) => 8 + (n.x / Math.max(1, order - 1)) * 84;
  const Y = (n) => 10 + n.depth * 14;
  return (
    <div className={c.col}>
      <input className={c.input} value={text} aria-label="Numbers to insert into the search tree" onChange={(e) => setText(e.target.value.replace(/[^0-9 ,]/g, ''))} />
      <svg className={c.svg} viewBox="0 0 100 70" aria-hidden="true">
        {nodes.filter((n) => n.parent).map((n) => <line key={`e${n.v}`} className={c.edge} x1={X(byV[n.parent.v])} y1={Y(byV[n.parent.v])} x2={X(n)} y2={Y(n)} />)}
        {nodes.map((n) => <g key={n.v} className={c.box} data-hot={n.depth === 0}><circle cx={X(n)} cy={Y(n)} r="4.4" /><text x={X(n)} y={Y(n)} textAnchor="middle" dominantBaseline="central">{n.v}</text></g>)}
      </svg>
    </div>
  );
}
