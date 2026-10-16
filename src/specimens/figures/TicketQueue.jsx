import { useState } from 'react';
import c from './figures.module.css';

/* 27 */ export function TicketQueue() {
  const [now, setNow] = useState(41);
  return (
    <div className={c.queue}>
      <em>Now serving</em>
      <b key={now}>{String(now).padStart(3, '0')}</b>
      <p>{[1, 2, 3].map((k) => <i key={k}>{String(now + k).padStart(3, '0')}</i>)}</p>
      <button type="button" onClick={() => setNow((v) => v + 1)}>Call next</button>
    </div>
  );
}
