import { useState } from 'react';
import { f1 } from "../../../stage/chartKit";
import c from "../figures.module.css";

/* 32 */ const collatz = (n) => { const out = [n]; let v = n; while (v !== 1) { v = v % 2 ? 3 * v + 1 : v / 2; out.push(v); } return out; };

const STARTS = [27, 7, 97, 12, 19];

export function CollatzTrail() {
  const [k, setK] = useState(0);
  const seq = collatz(STARTS[k]);
  const hi = Math.max(...seq);
  const path = seq.map((v, i) => `${i ? 'L' : 'M'}${f1((i / (seq.length - 1)) * 100)} ${f1(46 - (Math.log(v) / Math.log(hi)) * 42)}`).join('');
  return (
    <button type="button" className={c.chBtn} aria-label={`Collatz sequence from ${STARTS[k]}. Click for another start`} onClick={() => setK((k + 1) % STARTS.length)}>
      <svg key={k} viewBox="0 0 100 50" aria-hidden="true"><path className={c.collatz} d={path} pathLength="1" /></svg>
      <span className={c.sub}>start <b>{STARTS[k]}</b> · {seq.length - 1} steps · peak {hi}</span>
    </button>
  );
}
