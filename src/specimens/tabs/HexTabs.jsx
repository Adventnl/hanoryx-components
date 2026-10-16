import { useState } from 'react';
import c from './tabs.module.css';

/* 32 */ export function HexTabs() {
  const [k, setK] = useState(1);
  return (
    <div className={c.hex} role="tablist" aria-label="Hex tabs">
      {['α', 'β', 'γ'].map((t, i) => <button key={t} type="button" role="tab" aria-selected={i === k} onClick={() => setK(i)}>{t}</button>)}
    </div>
  );
}
