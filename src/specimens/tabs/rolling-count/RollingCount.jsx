import { useState } from 'react';
import c from "../tabs.module.css";

/* 14 */ export function RollingCount() {
  const [i, setI] = useState(2);
  return (
    <div className={c.roll}>
      <div className={c.rollWin} aria-live="polite" aria-label={`Page ${i + 1} of 5`}><ol style={{ '--i': i }}>{[1, 2, 3, 4, 5].map((n) => <li key={n}>{n}</li>)}</ol><span>/ 5</span></div>
      <div role="tablist" aria-label="Rolling counter tabs">{[0, 1, 2, 3, 4].map((k) => <button key={k} type="button" role="tab" aria-selected={k === i} aria-label={`Page ${k + 1}`} onClick={() => setI(k)} />)}</div>
    </div>
  );
}
