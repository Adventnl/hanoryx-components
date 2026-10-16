import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './morphs.module.css';

/* 17 */ export function CaretFlip() {
  const [on, setOn] = useState(false);
  return <div className={c.stage}><button type="button" className={c.caret} data-on={on} aria-expanded={on} aria-label="Caret. Click to flip it" onClick={() => setOn((v) => !v)}><Ico n="down" /></button></div>;
}
