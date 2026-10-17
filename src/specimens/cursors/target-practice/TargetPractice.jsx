import { useState } from 'react';
import c from "../cursors.module.css";

/* 38 */ export function TargetPractice() {
  const [t, setT] = useState([30, 40]);
  const [hits, setHits] = useState(0);
  return (
    <div className={`${c.area} ${c.target}`} role="group" aria-label="Target practice">
      <button type="button" style={{ left: `${t[0]}%`, top: `${t[1]}%` }} aria-label="Target" onClick={() => { setHits((h) => h + 1); setT([14 + ((hits * 37 + 23) % 72), 18 + ((hits * 53 + 11) % 64)]); }}><i /></button>
      <output>{hits} hits</output>
    </div>
  );
}
