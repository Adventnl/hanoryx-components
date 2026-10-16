import { useState } from 'react';
import c from './heroes.module.css';
import { Sc } from './shared';

/* 38 */ export function ContactEnding() {
  const [d, setD] = useState(false);
  return <Sc label="Contact ending" className={c.cen}><small>Write to us</small><h3>hello@hanoryx.io</h3><button type="button" className={c.ghost} onClick={() => setD((v) => !v)}>{d ? 'Copied ✓' : 'Copy address'}</button></Sc>;
}
