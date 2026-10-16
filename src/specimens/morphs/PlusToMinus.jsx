import { useState } from 'react';
import c from './morphs.module.css';

/* 16 */ export function PlusToMinus() {
  const [on, setOn] = useState(false);
  return <div className={c.stage}><button type="button" className={c.pm} data-on={on} aria-pressed={on} aria-label={on ? 'Minus' : 'Plus'} onClick={() => setOn((v) => !v)}><i /><i /></button></div>;
}
