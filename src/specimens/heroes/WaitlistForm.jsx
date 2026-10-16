import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './heroes.module.css';
import { Cta, Sc } from './shared';

/* 30 */ export function WaitlistForm() {
  const [n, setN] = useState('');
  const [d, setD] = useState(false);
  return <Sc label="Waitlist form" className={c.cen}>{d ? <><span className={c.ok}><Ico n="check" /></span><h3>You are on the list</h3><button type="button" className={c.ghost} onClick={() => { setD(false); setN(''); }}>Reset</button></> : <><h3>Join the waitlist</h3><form className={c.form} onSubmit={(e) => { e.preventDefault(); if (n.trim()) setD(true); }}><input value={n} onChange={(e) => setN(e.target.value)} placeholder="Your name" aria-label="Name" /><Cta type="submit">Join</Cta></form></>}</Sc>;
}
