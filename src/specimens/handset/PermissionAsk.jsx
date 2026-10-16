import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './handset.module.css';
import { Phone } from './shared';

/* 03 */ export function PermissionAsk() {
  const [a, setA] = useState('');
  return (
    <Phone label="Permission request" className={c.center}>
      <span className={c.art} style={{ background: '#60a5fa' }}><Ico n="bell" /></span>
      <b className={c.h}>Allow alerts?</b>
      <span className={c.p}>{a === 'y' ? 'Alerts are on.' : a === 'n' ? 'Maybe later.' : 'We only send what matters.'}</span>
      <div className={c.pair}><button type="button" className={c.btn} onClick={() => setA('y')}>Allow</button><button type="button" className={c.ghost} onClick={() => setA('n')}>Not now</button></div>
    </Phone>
  );
}
