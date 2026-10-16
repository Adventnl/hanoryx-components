import { useState } from 'react';
import c from './stamps.module.css';

/* 35 */ export function ClassifiedMark() {
  const [on, setOn] = useState(true);
  return (
    <button type="button" className={c.doc} aria-pressed={on} onClick={() => setOn((v) => !v)} aria-label="Document marked confidential. Click to remove the mark">
      <i /><i /><i /><i />
      {on && <b className={c.mark}>CONFIDENTIAL</b>}
    </button>
  );
}
