import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './docks.module.css';

/* 4 */ export function TypeBar() {
  const [on, setOn] = useState({ bold: true, italic: false, underline: false });
  const flip = (n) => setOn((o) => ({ ...o, [n]: !o[n] }));
  return (
    <div className={c.format}>
      <div role="toolbar" aria-label="Text format">{['bold', 'italic', 'underline'].map((n) => <button key={n} type="button" aria-label={n} aria-pressed={on[n]} onClick={() => flip(n)}><Ico n={n} /></button>)}</div>
      <p style={{ fontWeight: on.bold ? 700 : 300, fontStyle: on.italic ? 'italic' : 'normal', textDecoration: on.underline ? 'underline' : 'none' }}>The quick brown fox</p>
    </div>
  );
}
