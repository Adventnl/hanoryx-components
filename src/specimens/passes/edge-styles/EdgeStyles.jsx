import { useState } from 'react';
import { f1 } from "../../../stage/chartKit";
import c from "../passes.module.css";
import { perf } from "../shared";

/* 37 */
const zig = (w, h, t) => {
  const n = Math.round(w / (t * 2));
  let d = `M0 ${t}`;
  for (let k = 0; k < n; k += 1) d += `L${f1(((k + 0.5) * w) / n)} 0L${f1(((k + 1) * w) / n)} ${t}`;
  d += `L${w} ${h - t}`;
  for (let k = n - 1; k >= 0; k -= 1) d += `L${f1(((k + 0.5) * w) / n)} ${h}L${f1((k * w) / n)} ${h - t}`;
  return `${d}Z`;
};

const wave = (w, h, a) => {
  const n = 8;
  let d = `M0 ${a}`;
  for (let k = 0; k < n; k += 1) d += `Q${f1(((k + 0.5) * w) / n)} ${k % 2 ? a * 2 : 0} ${f1(((k + 1) * w) / n)} ${a}`;
  d += `L${w} ${h - a}`;
  for (let k = n - 1; k >= 0; k -= 1) d += `Q${f1(((k + 0.5) * w) / n)} ${k % 2 ? h : h - a * 2} ${f1((k * w) / n)} ${h - a}`;
  return `${d}Z`;
};

const EDGES = [
  ['Straight', (w, h) => `M0 0H${w}V${h}H0Z`],
  ['Scallop', (w, h) => perf(w, h, 5.2, 10, 3)],
  ['Zigzag', (w, h) => zig(w, h, 7)],
  ['Notch', (w, h) => perf(w, h, 10, 1, 1)],
  ['Wave', (w, h) => wave(w, h, 5)],
];

export function EdgeStyles() {
  const [k, setK] = useState(1);
  return (
    <div className={c.fig}>
      <svg className={c.eg} viewBox="0 0 240 96" role="img" aria-label={`A ticket with a ${EDGES[k][0].toLowerCase()} edge`}>
        <path className={c.egPaper} key={k} d={EDGES[k][1](240, 96)} />
        <text className={c.egBig} x="120" y="52" textAnchor="middle">Admit one</text>
        <text className={c.egSmall} x="120" y="70" textAnchor="middle">{EDGES[k][0].toUpperCase()} EDGE</text>
      </svg>
      <span className={c.egTabs} role="group" aria-label="Edge style">
        {EDGES.map(([n], i) => <button key={n} type="button" aria-pressed={k === i} onClick={() => setK(i)}>{n}</button>)}
      </span>
    </div>
  );
}
