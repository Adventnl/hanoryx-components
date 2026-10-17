import { useState } from 'react';
import c from "../graphs.module.css";
import { layoutTree } from "../shared";

/* 28 */ export function Trie() {
  const [text, setText] = useState('tea ten to inn in');
  const words = text.toLowerCase().split(/\s+/).filter(Boolean).slice(0, 8);
  const root = { n: '*', kids: [] };
  words.forEach((w) => { let cur = root; [...w].forEach((ch) => { let nx = cur.kids.find((k) => k.n === ch); if (!nx) { nx = { n: ch, kids: [] }; cur.kids.push(nx); } cur = nx; }); });
  const L = layoutTree(root);
  const X = (d) => 8 + (L.depth ? (d.depth / L.depth) * 84 : 0);
  const Y = (d) => 8 + (L.leaves > 1 ? (d.x / (L.leaves - 1)) * 50 : 25);
  return (
    <div className={c.col}>
      <input className={c.input} value={text} aria-label="Words to put in the trie" onChange={(e) => setText(e.target.value.replace(/[^a-zA-Z ]/g, ''))} />
      <svg className={c.svg} viewBox="0 0 100 66" aria-hidden="true">
        {L.nodes.filter((d) => d.parent).map((d, i) => <path key={i} className={c.edge} d={`M${X(d.parent)} ${Y(d.parent)}C${(X(d.parent) + X(d)) / 2} ${Y(d.parent)} ${(X(d.parent) + X(d)) / 2} ${Y(d)} ${X(d)} ${Y(d)}`} />)}
        {L.nodes.map((d, i) => <g key={i} className={c.box} data-hot={d.depth === 0}><circle cx={X(d)} cy={Y(d)} r="3.6" /><text x={X(d)} y={Y(d)} textAnchor="middle" dominantBaseline="central">{d.n.n}</text></g>)}
      </svg>
    </div>
  );
}
