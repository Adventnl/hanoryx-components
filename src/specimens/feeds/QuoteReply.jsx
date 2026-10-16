import { useState } from 'react';
import c from './feeds.module.css';
import { Fd } from './shared';

/* 19 */ export function QuoteReply() {
  const [q, setQ] = useState(null);
  const M = ['Can you send the file?', 'It is in the drive', 'Which folder?'];
  return (
    <Fd label="Quote reply" className={c.chat}>
      <div>{M.map((t, k) => <button key={t} type="button" className={c.msgBtn} data-me={k === 1} aria-label={`Reply to: ${t}`} onClick={() => setQ(t)}>{t}</button>)}</div>
      {q && <div className={c.quote}><span>↩ {q}</span><button type="button" aria-label="Cancel reply" onClick={() => setQ(null)}>×</button></div>}
    </Fd>
  );
}
