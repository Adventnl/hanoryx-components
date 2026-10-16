import { useState } from 'react';
import c from './waypoints.module.css';

/* 22 */ export function DotIndex() {
  const [k, setK] = useState(3);
  return (
    <ol className={c.idx} aria-label="Dot and line index">
      {['Prelude', 'First', 'Second', 'Third', 'Coda'].map((t, i) => <li key={t} data-on={i <= k}><button type="button" aria-current={i === k ? 'true' : undefined} onClick={() => setK(i)}><i /><span>{t}</span></button></li>)}
    </ol>
  );
}
