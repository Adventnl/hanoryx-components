import { useState } from 'react';
import c from './morphs.module.css';

/* 19 */ export function EyeAndLid() {
  const [on, setOn] = useState(false);
  return <div className={c.stage}><button type="button" className={c.eye} data-on={on} aria-pressed={on} aria-label={on ? 'Eye closed' : 'Eye open'} onClick={() => setOn((v) => !v)}><i /><b /></button></div>;
}
