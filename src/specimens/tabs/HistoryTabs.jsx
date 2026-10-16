import { useState } from 'react';
import c from './tabs.module.css';

/* 27 */ export function HistoryTabs() {
  const [trail, setTrail] = useState(['Home']);
  const [at, setAt] = useState(0);
  const open = (name) => { setTrail((t) => [...t.slice(0, at + 1), name]); setAt((a) => a + 1); };
  return (
    <div className={c.history}>
      <div><button type="button" aria-label="Back" disabled={at === 0} onClick={() => setAt(at - 1)}>←</button><button type="button" aria-label="Forward" disabled={at >= trail.length - 1} onClick={() => setAt(at + 1)}>→</button><output>{trail[at]}</output></div>
      <div>{['Docs', 'Pricing', 'Blog'].map((n) => <button key={n} type="button" onClick={() => open(n)}>{n}</button>)}</div>
    </div>
  );
}
