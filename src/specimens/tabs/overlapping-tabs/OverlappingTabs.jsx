import { useState } from 'react';
import c from "../tabs.module.css";

/* 39 */ export function OverlappingTabs() {
  const [k, setK] = useState(1);
  return (
    <div className={c.overlap} role="tablist" aria-label="Overlapping tabs">
      {['Doc 1', 'Doc 2', 'Doc 3', 'Doc 4'].map((t, i) => <button key={t} type="button" role="tab" aria-selected={i === k} style={{ '--z': i === k ? 9 : 4 - i }} onClick={() => setK(i)}>{t}</button>)}
    </div>
  );
}
