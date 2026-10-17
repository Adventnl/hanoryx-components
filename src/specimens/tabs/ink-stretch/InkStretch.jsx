import { useState } from 'react';
import c from "../tabs.module.css";

/* 12 */ export function InkStretch() {
  const [i, setI] = useState(0);
  const [from, setFrom] = useState(0);
  const pick = (k) => { setFrom(i); setI(k); };
  const lo = Math.min(i, from);
  const hi = Math.max(i, from);
  return (
    <div className={c.ink} role="tablist" aria-label="Stretching ink tabs" style={{ '--lo': lo, '--span': hi - lo + 1 }} data-moving={from !== i}>
      {['Run', 'Test', 'Ship', 'Rest'].map((t, k) => <button key={t} type="button" role="tab" aria-selected={k === i} tabIndex={k === i ? 0 : -1} onClick={() => pick(k)}>{t}</button>)}
      <i aria-hidden="true" />
    </div>
  );
}
