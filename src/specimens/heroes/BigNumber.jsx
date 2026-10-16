import { useState } from 'react';
import c from './heroes.module.css';
import { Sc } from './shared';

/* 25 */ export function BigNumber() {
  const [o, setO] = useState(false);
  return <Sc label="Big number" className={c.big}><button type="button" aria-expanded={o} onClick={() => setO((v) => !v)}><b>99.9%</b></button><small>{o ? 'Measured over twelve months, every region.' : 'uptime'}</small></Sc>;
}
