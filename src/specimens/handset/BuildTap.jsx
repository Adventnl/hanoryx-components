import { useState } from 'react';
import c from './handset.module.css';
import { Phone } from './shared';

/* 38 */ export function BuildTap() {
  const [n, setN] = useState(3);
  return (
    <Phone label="Build number" className={c.center}>
      <span className={c.logo}>H</span>
      <button type="button" className={c.ghost} onClick={() => setN((v) => v + 1)}>Build 1.4.2</button>
      <span className={c.p}>{n >= 7 ? 'Developer mode on' : `${7 - n} taps to go`}</span>
    </Phone>
  );
}
