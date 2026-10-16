import { useState } from 'react';
import c from './morphs.module.css';

/* 33 */ export function CheckDraw() {
  const [on, setOn] = useState(false);
  return (
    <div className={c.stage}>
      <button type="button" role="checkbox" aria-checked={on} className={c.box} data-on={on} aria-label="Checkbox" onClick={() => setOn((v) => !v)}>
        <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7" pathLength="1" /></svg>
      </button>
    </div>
  );
}
