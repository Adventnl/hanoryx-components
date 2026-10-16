import { useState } from 'react';
import c from './morphs.module.css';

/* 14 */ export function MenuToCross() {
  const [on, setOn] = useState(false);
  return <div className={c.stage}><button type="button" className={c.burger} data-on={on} aria-pressed={on} aria-label="Menu button. Click to turn it into a cross" onClick={() => setOn((v) => !v)}><i /><i /><i /></button></div>;
}
