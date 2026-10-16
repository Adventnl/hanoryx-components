import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './handset.module.css';
import { Phone } from './shared';

/* 20 */ export function TopBanner() {
  const [on, setOn] = useState(true);
  return (
    <Phone label="Top banner">
      <button type="button" className={c.banner} data-on={on} aria-label="Notification banner. Click to dismiss" onClick={() => setOn((v) => !v)}><Ico n="mail" /><span><em>New message</em><small>Ana: see you at 6</small></span></button>
      <u className={c.line} /><u className={c.line} /><button type="button" className={c.ghost} onClick={() => setOn(true)}>Again</button>
    </Phone>
  );
}
