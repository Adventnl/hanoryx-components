import { useState } from 'react';
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 29 */ export function AlertGroups() {
  const [g, setG] = useState([['Mentions', 2], ['Comments', 3], ['System', 1]]);
  return (
    <Fd label="Alert groups" className={c.list}>
      {g.map(([t, n]) => <div key={t} className={c.row}><span>{t}</span><em className={c.badge}>{n}</em></div>)}
      <button type="button" className={c.more} onClick={() => setG((a) => (a.length ? [] : [['Mentions', 2], ['Comments', 3], ['System', 1]]))}>{g.length ? 'Clear all' : 'Restore'}</button>
    </Fd>
  );
}
