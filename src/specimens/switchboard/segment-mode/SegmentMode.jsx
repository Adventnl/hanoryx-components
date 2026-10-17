import { useState } from 'react';
import c from "../switchboard.module.css";

/* 31 */ export function SegmentMode() {
  const [n, setN] = useState(1);
  return (
    <div className={c.segment} style={{ '--n': n }} data-n={n} role="radiogroup" aria-label="Mode">
      {['OFF', 'AUTO', 'ON'].map((t, i) => <button type="button" key={t} role="radio" aria-checked={n === i} onClick={() => setN(i)}>{t}</button>)}
      <i />
    </div>
  );
}
