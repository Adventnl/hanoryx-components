import { useState } from 'react';
import c from './tabs.module.css';

/* 23 */ export function IndexDividers() {
  const [k, setK] = useState(0);
  return (
    <div className={c.index}>
      <div role="tablist" aria-label="Index card dividers" aria-orientation="vertical">{['A–F', 'G–M', 'N–S', 'T–Z'].map((t, i) => <button key={t} type="button" role="tab" aria-selected={i === k} style={{ '--i': i }} onClick={() => setK(i)}>{t}</button>)}</div>
      <div className={c.card} key={k}>Entries {['A–F', 'G–M', 'N–S', 'T–Z'][k]}</div>
    </div>
  );
}
