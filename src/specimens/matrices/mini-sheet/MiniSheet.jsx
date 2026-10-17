import { useState } from 'react';
import c from "../matrices.module.css";

/* 30 */ export function MiniSheet() {
  const [v, setV] = useState(['12', '8', '15', '4', '22', '9', '30', '6', '11']);
  const n = (i) => Number(v[i]) || 0;
  const rowSum = (r) => n(r * 3) + n(r * 3 + 1) + n(r * 3 + 2);
  const colSum = (k) => n(k) + n(3 + k) + n(6 + k);
  return (
    <div className={c.sheet}>
      {[0, 1, 2].map((r) => (
        <p key={r}>
          {[0, 1, 2].map((k) => <input key={k} type="number" value={v[r * 3 + k]} aria-label={`Cell ${'ABC'[k]}${r + 1}`} onChange={(e) => setV((p) => p.map((x, i) => (i === r * 3 + k ? e.target.value : x)))} />)}
          <b>{rowSum(r)}</b>
        </p>
      ))}
      <p><b>{colSum(0)}</b><b>{colSum(1)}</b><b>{colSum(2)}</b><b className={c.grand}>{rowSum(0) + rowSum(1) + rowSum(2)}</b></p>
    </div>
  );
}
