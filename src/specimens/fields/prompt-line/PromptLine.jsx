import { useState } from 'react';
import c from "../fields.module.css";

/* 25 */ export function PromptLine() {
  const [v, setV] = useState('');
  const [log, setLog] = useState(['ready']);
  return (
    <div className={c.prompt}>
      {log.slice(-2).map((l, i) => <p key={`${l}${i}`}>{l}</p>)}
      <label><span>›</span><input value={v} aria-label="Command prompt" placeholder="type, then Enter" onChange={(e) => setV(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter' && v) { setLog([...log, `ran: ${v}`]); setV(''); } }} /></label>
    </div>
  );
}
