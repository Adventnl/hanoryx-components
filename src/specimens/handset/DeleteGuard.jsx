import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './handset.module.css';
import { Phone } from './shared';

/* 36 */ export function DeleteGuard() {
  const [v, setV] = useState('');
  return (
    <Phone label="Delete guard" className={c.center}>
      <span className={c.art} style={{ background: '#ff5a5a' }}><Ico n="trash" /></span>
      <span className={c.p}>Type DELETE to confirm</span>
      <input className={c.in} value={v} onChange={(e) => setV(e.target.value)} aria-label="Type DELETE" />
      <button type="button" className={c.btn} disabled={v !== 'DELETE'}>Delete account</button>
    </Phone>
  );
}
