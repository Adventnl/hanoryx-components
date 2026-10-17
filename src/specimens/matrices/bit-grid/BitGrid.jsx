import { useState } from 'react';
import { useCell } from "../../../stage/chartKit";
import c from "../matrices.module.css";

/* 21 */ export function BitGrid() {
  const [bytes, setBytes] = useState([255, 51, 51]);
  const [at, bind] = useCell(3, 8, (r, k) => setBytes((b) => b.map((v, i) => (i === r ? v ^ (128 >> k) : v))));
  const hex = `#${bytes.map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase()}`;
  return (
    <div className={c.bits}>
      <div className={c.bitGrid} {...bind} aria-label="Bit grid, click a bit to flip it">
        {bytes.map((v, r) => [...Array(8)].map((_, k) => <i key={`${r}-${k}`} data-on={(v >> (7 - k)) & 1} data-at={r === at[0] && k === at[1]} />))}
      </div>
      <p><u style={{ background: hex }} /><output>{hex}</output></p>
    </div>
  );
}
