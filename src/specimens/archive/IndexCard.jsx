import { useState } from 'react';
import c from './archive.module.css';

const cx = (...a) => a.filter(Boolean).join(' ');

/* 01 */ export function IndexCard() {
  const [back, setBack] = useState(false);
  return (
    <button type="button" className={c.flip} aria-pressed={back} onClick={() => setBack((v) => !v)} aria-label="Index card. Click to turn it over">
      <span className={c.flipIn} data-back={back}>
        <span className={c.face}><small>REF 0417</small><b>Systems audit</b><i /><i /></span>
        <span className={cx(c.face, c.rear)}><i /><i /><i /><i /><small>filed 14 Oct</small></span>
      </span>
    </button>
  );
}
