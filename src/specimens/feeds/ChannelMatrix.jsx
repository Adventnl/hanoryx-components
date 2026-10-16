import { useState } from 'react';
import c from './feeds.module.css';
import { Fd } from './shared';

/* 34 */ export function ChannelMatrix() {
  const [g, setG] = useState([[1, 1, 0], [1, 0, 0], [0, 1, 1]]);
  return (
    <Fd label="Notification channels" className={c.list}>
      <div className={c.mxRow}><span /><small>Push</small><small>Mail</small><small>SMS</small></div>
      {['Mentions', 'Replies', 'Billing'].map((t, r) => <div key={t} className={c.mxRow}><span>{t}</span>{g[r].map((v, k) => <button key={k} type="button" role="switch" aria-checked={!!v} aria-label={`${t} by ${['push', 'mail', 'SMS'][k]}`} className={c.dotSw} onClick={() => setG((a) => a.map((row, i) => (i === r ? row.map((x, j) => (j === k ? (x ? 0 : 1) : x)) : row)))} />)}</div>)}
    </Fd>
  );
}
