import { useState } from 'react';
import c from './morphs.module.css';

/* 34 */ export function DotsToBar() {
  const [on, setOn] = useState(false);
  return <div className={c.stage}><button type="button" className={c.dots} data-on={on} aria-pressed={on} aria-label="Three dots. Click to join them into a bar" onClick={() => setOn((v) => !v)}><i /><i /><i /></button></div>;
}
