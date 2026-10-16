import { useState } from 'react';
import c from './heroes.module.css';
import { Cta, Nav, Sc } from './shared';

/* 01 */ export function CentredOpening() {
  const [d, setD] = useState(false);
  return <Sc label="Centred hero" className={c.cen}><Nav /><h3>Build calm systems</h3><p>Software that stays out of your way.</p><Cta onClick={() => setD((v) => !v)}>{d ? 'Thank you' : 'Get started'}</Cta></Sc>;
}
