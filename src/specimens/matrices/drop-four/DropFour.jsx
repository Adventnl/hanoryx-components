import { useState } from 'react';
import { useCell } from "../../../stage/chartKit";
import c from "../matrices.module.css";

/* 37 */ const FW = 7;

const FH = 6;

const four = (b) => {
  for (let y = 0; y < FH; y += 1) {
    for (let x = 0; x < FW; x += 1) {
      const v = b[y * FW + x];
      if (v) for (const [dx, dy] of [[1, 0], [0, 1], [1, 1], [1, -1]]) {
        if ([1, 2, 3].every((n) => { const xx = x + dx * n; const yy = y + dy * n; return xx >= 0 && xx < FW && yy >= 0 && yy < FH && b[yy * FW + xx] === v; })) return v;
      }
    }
  }
  return null;
};

const drop = (b, col, who) => {
  for (let y = FH - 1; y >= 0; y -= 1) if (!b[y * FW + col]) return b.map((v, i) => (i === y * FW + col ? who : v));
  return null;
};

const aiDrop = (b) => {
  const cols = [3, 2, 4, 1, 5, 0, 6].filter((k) => drop(b, k, 'W'));
  const win = (who) => cols.find((k) => four(drop(b, k, who)) === who);
  const k = win('W') ?? win('R') ?? cols[0];
  return k === undefined ? b : drop(b, k, 'W');
};

export function DropFour() {
  const [b, setB] = useState(Array(FW * FH).fill(''));
  const w = four(b);
  const over = w || b.every(Boolean);
  const [at, bind] = useCell(FH, FW, (r, k) => {
    if (over) { setB(Array(FW * FH).fill('')); return; }
    const next = drop(b, k, 'R');
    if (next) setB(four(next) ? next : aiDrop(next));
  });
  return (
    <div className={c.box}>
      <div className={c.four} {...bind} aria-label="Drop four, click a column to drop a disc">
        {b.map((v, i) => <i key={i} data-v={v} data-col={at[1] === i % FW} />)}
      </div>
      <output className={c.out}>{w ? <b>{w === 'R' ? 'You win' : 'White wins'} · click to restart</b> : over ? <b>Full · click to restart</b> : 'Drop a red disc in a column'}</output>
    </div>
  );
}
