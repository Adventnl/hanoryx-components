import { useState } from 'react';
import c from './tabs.module.css';

/* 28 */ export function GooeyTabs() {
  const [k, setK] = useState(0);
  return (
    <div className={c.goo}>
      <svg width="0" height="0" aria-hidden="true" focusable="false"><defs><filter id="tabs-goo"><feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b" /><feColorMatrix in="b" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" /></filter></defs></svg>
      <div className={c.gooBlob} style={{ '--k': k }} aria-hidden="true"><i /><i /></div>
      <div role="tablist" aria-label="Gooey tabs">{['Up', 'Mid', 'Low'].map((t, i) => <button key={t} type="button" role="tab" aria-selected={i === k} onClick={() => setK(i)}>{t}</button>)}</div>
    </div>
  );
}
