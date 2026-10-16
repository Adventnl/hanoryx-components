import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './handset.module.css';
import { Phone } from './shared';

/* 22 */ export function ChatThread() {
  const [m, setM] = useState(['Are we on?', 'Yes, 6pm.']);
  const [v, setV] = useState('');
  const send = (e) => { e.preventDefault(); if (v.trim()) { setM((a) => [...a.slice(-3), v.trim()]); setV(''); } };
  return (
    <Phone label="Chat thread" className={c.between}>
      <div className={c.bubbles}>{m.map((x, i) => <span key={`${i}${x}`} data-me={i % 2 === 1}>{x}</span>)}</div>
      <form className={c.compose} onSubmit={send}><input value={v} onChange={(e) => setV(e.target.value)} placeholder="Message" aria-label="Message" /><button type="submit" aria-label="Send"><Ico n="right" /></button></form>
    </Phone>
  );
}
