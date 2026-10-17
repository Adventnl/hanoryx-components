import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../feeds.module.css";
import { Fd, MSGS } from "../shared";

/* 16 */ export function BubbleThread() {
  const [m, setM] = useState(MSGS.slice(0, 3));
  const [v, setV] = useState('');
  const send = (e) => { e.preventDefault(); if (v.trim()) { setM((a) => [...a.slice(-3), ['You', v.trim()]]); setV(''); } };
  return (
    <Fd label="Chat thread" className={c.chat}>
      <div>{m.map(([w, t], k) => <p key={`${k}${t}`} data-me={w === 'You'}>{t}</p>)}</div>
      <form onSubmit={send}><input value={v} onChange={(e) => setV(e.target.value)} placeholder="Message" aria-label="Message" /><button type="submit" aria-label="Send"><Ico n="right" /></button></form>
    </Fd>
  );
}
