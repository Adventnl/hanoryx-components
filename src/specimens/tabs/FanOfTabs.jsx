import { useState } from 'react';
import c from './tabs.module.css';

/* 22 */ export function FanOfTabs() {
  const [k, setK] = useState(2);
  return (
    <div className={c.fan} role="tablist" aria-label="Fanned tabs">
      {['A', 'B', 'C', 'D', 'E'].map((t, i) => <button key={t} type="button" role="tab" aria-selected={i === k} style={{ '--d': i - k }} onClick={() => setK(i)}>{t}</button>)}
    </div>
  );
}
