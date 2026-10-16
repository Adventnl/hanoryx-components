import { useState } from 'react';
import c from './feeds.module.css';
import { Fd } from './shared';

/* 36 */ export function PriorityTabs() {
  const [t, setT] = useState(0);
  const L = [['All', ['Deploy ok', '@Ana review?', 'Backup done']], ['Mentions', ['@Ana review?']], ['Alerts', ['Backup done']]];
  return (
    <Fd label="Priority tabs" className={c.list}>
      <div className={c.tabs} role="tablist" aria-label="Filter">{L.map(([n], k) => <button key={n} type="button" role="tab" aria-selected={t === k} onClick={() => setT(k)}>{n}</button>)}</div>
      {L[t][1].map((x) => <span key={x} className={c.plain}>{x}</span>)}
    </Fd>
  );
}
