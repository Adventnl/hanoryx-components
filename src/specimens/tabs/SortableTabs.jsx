import { useState } from 'react';
import c from './tabs.module.css';

/* 8 */ export function SortableTabs() {
  const [order, setOrder] = useState(['Red', 'Ink', 'Bone']);
  const [cur, setCur] = useState(1);
  const move = (d) => setOrder((o) => {
    const j = cur + d;
    if (j < 0 || j >= o.length) return o;
    const n = [...o];
    [n[cur], n[j]] = [n[j], n[cur]];
    setCur(j);
    return n;
  });
  return (
    <div className={c.sortable}>
      <div role="tablist" aria-label="Reorderable tabs">{order.map((t, k) => <button key={t} type="button" role="tab" aria-selected={k === cur} data-on={k === cur} onClick={() => setCur(k)}>{t}</button>)}</div>
      <span><button type="button" aria-label="Move tab left" onClick={() => move(-1)}>←</button><button type="button" aria-label="Move tab right" onClick={() => move(1)}>→</button></span>
    </div>
  );
}
