import { useState } from 'react';
import c from './handset.module.css';
import { Phone } from './shared';

/* 04 */ export function SignInForm() {
  const [e, setE] = useState('');
  const [p, setP] = useState('');
  const ok = e.includes('@') && p.length > 3;
  return (
    <Phone label="Sign in form">
      <b className={c.h}>Sign in</b>
      <input className={c.in} value={e} onChange={(x) => setE(x.target.value)} placeholder="Email" aria-label="Email" />
      <input className={c.in} type="password" value={p} onChange={(x) => setP(x.target.value)} placeholder="Password" aria-label="Password" />
      <button type="button" className={c.btn} disabled={!ok}>Continue</button>
      <span className={c.p}>{ok ? 'Ready.' : 'Fill both fields.'}</span>
    </Phone>
  );
}
