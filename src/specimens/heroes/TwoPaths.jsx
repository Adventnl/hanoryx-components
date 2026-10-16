import { useState } from 'react';
import c from './heroes.module.css';
import { Cta, Sc } from './shared';

/* 08 */ export function TwoPaths() {
  const [p, setP] = useState('');
  return <Sc label="Two buttons" className={c.cen}><h3>Start small</h3><p>{p || 'Pick a path'}</p><div className={c.pair}><Cta onClick={() => setP('Free plan chosen')}>Start free</Cta><button type="button" className={c.ghost} onClick={() => setP('Demo booked')}>Book a demo</button></div></Sc>;
}
