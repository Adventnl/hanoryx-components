import { useState } from 'react';
import c from "../tabs.module.css";

/* 13 */ export function MagicLine() {
  const [i, setI] = useState(1);
  const [hover, setHover] = useState(-1);
  const at = hover >= 0 ? hover : i;
  return (
    <div className={c.magic} role="tablist" aria-label="Magic line tabs" style={{ '--at': at }} onPointerLeave={() => setHover(-1)}>
      {['Work', 'Lab', 'About', 'Mail'].map((t, k) => (
        <button key={t} type="button" role="tab" aria-selected={k === i} tabIndex={k === i ? 0 : -1} onPointerEnter={() => setHover(k)} onFocus={() => setHover(k)} onBlur={() => setHover(-1)} onClick={() => setI(k)}>{t}</button>
      ))}
      <i aria-hidden="true" />
    </div>
  );
}
