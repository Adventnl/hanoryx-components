import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './handset.module.css';
import { Phone } from './shared';

/* 19 */ export function ShareGrid() {
  const [s, setS] = useState(-1);
  const A = [['mail', 'Mail'], ['chat', 'Chat'], ['link', 'Link'], ['copy', 'Copy'], ['download', 'Save'], ['share', 'More']];
  return (
    <Phone label="Share sheet">
      <b className={c.h}>Share</b>
      <div className={c.shareG}>{A.map(([n, l], k) => <button key={n} type="button" aria-pressed={s === k} onClick={() => setS(k)}><Ico n={n} /><small>{l}</small></button>)}</div>
      <span className={c.p}>{s < 0 ? 'Choose where' : `Sent via ${A[s][1]}`}</span>
    </Phone>
  );
}
