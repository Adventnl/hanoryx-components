import { useState } from 'react';
import c from './handset.module.css';
import { Phone } from './shared';

/* 37 */ export function SignOutAsk() {
  const [a, setA] = useState('');
  return (
    <Phone label="Sign-out ask" className={c.bottom}>
      <span className={c.dim} />
      <div className={c.ask}>
        <b className={c.h}>Sign out?</b>
        <span className={c.p}>{a === 'y' ? 'Signed out' : a === 'n' ? 'Still here' : 'You can sign back in.'}</span>
        <button type="button" className={c.btn} onClick={() => setA('y')}>Sign out</button>
        <button type="button" className={c.ghost} onClick={() => setA('n')}>Stay</button>
      </div>
    </Phone>
  );
}
