import { useState } from 'react';
import c from "../graphs.module.css";
import { Legend } from "../shared";

/* 29 */ const HUFF = (() => {
  const freq = [['A', 5], ['B', 2], ['R', 2], ['C', 1], ['D', 1]];
  let pool = freq.map(([ch, w]) => ({ ch, w }));
  while (pool.length > 1) {
    pool.sort((a, b) => a.w - b.w);
    const [a, b] = pool;
    pool = [{ w: a.w + b.w, kids: [a, b] }, ...pool.slice(2)];
  }
  const codes = {};
  const walk = (t, code) => { if (t.ch) codes[t.ch] = code; else { walk(t.kids[0], `${code}0`); walk(t.kids[1], `${code}1`); } };
  walk(pool[0], '');
  const nodes = [];
  const place = (t, depth, x0, x1, code) => { const me = { t, depth, x: (x0 + x1) / 2, code }; nodes.push(me); if (t.kids) { const m = (x0 + x1) / 2; place(t.kids[0], depth + 1, x0, m, `${code}0`); place(t.kids[1], depth + 1, m, x1, `${code}1`); } };
  place(pool[0], 0, 4, 96, '');
  return { codes, nodes, names: freq.map(([ch]) => ch) };
})();

export function HuffmanTree() {
  const [hot, setHot] = useState(-1);
  const hotCode = hot < 0 ? null : HUFF.codes[HUFF.names[hot]];
  return (
    <div className={c.col} data-hot={hot}>
      <svg className={c.svg} viewBox="0 0 100 66" aria-hidden="true">
        {HUFF.nodes.filter((n) => n.depth).map((n, i) => { const par = HUFF.nodes.find((m) => m.code === n.code.slice(0, -1)); return <line key={i} className={c.edge} data-hot={hotCode !== null && hotCode.startsWith(n.code)} x1={par.x} y1={8 + par.depth * 14} x2={n.x} y2={8 + n.depth * 14} />; })}
        {HUFF.nodes.map((n, i) => <g key={i} className={c.box} data-hot={hotCode !== null && hotCode.startsWith(n.code)}><circle cx={n.x} cy={8 + n.depth * 14} r="4.2" /><text x={n.x} y={8 + n.depth * 14} textAnchor="middle" dominantBaseline="central">{n.t.ch || n.t.w}</text></g>)}
      </svg>
      <Legend items={HUFF.names.map((ch) => `${ch} ${HUFF.codes[ch]}`)} hot={hot} setHot={setHot} />
    </div>
  );
}
