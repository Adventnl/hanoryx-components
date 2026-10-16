import { useState } from 'react';
import c from './tabs.module.css';

/* 20 */ export function PanelCrossfade() {
  const [k, setK] = useState(0);
  const body = ['Short notes on the first thing.', 'A longer reading of the second.', 'Third: the least said the better.'];
  return (
    <div className={c.panel}>
      <div role="tablist" aria-label="Tabs with a panel">{['One', 'Two', 'Three'].map((t, i) => <button key={t} type="button" role="tab" id={`cf-${i}`} aria-selected={i === k} aria-controls="cf-panel" data-on={i === k} onClick={() => setK(i)}>{t}</button>)}</div>
      <p id="cf-panel" role="tabpanel" aria-labelledby={`cf-${k}`} key={k}>{body[k]}</p>
    </div>
  );
}
