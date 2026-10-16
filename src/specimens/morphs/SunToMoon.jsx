import { useState } from 'react';
import c from './morphs.module.css';

/* 18 */ export function SunToMoon() {
  const [on, setOn] = useState(false);
  return <div className={c.stage}><button type="button" className={c.sun} data-on={on} aria-pressed={on} aria-label={on ? 'Moon' : 'Sun'} onClick={() => setOn((v) => !v)}><i /><b /></button></div>;
}
