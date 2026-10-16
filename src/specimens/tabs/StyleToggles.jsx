import { useState } from 'react';
import c from './tabs.module.css';

/* 17 */ export function StyleToggles() {
  const [on, setOn] = useState([true, false, true]);
  return (
    <div className={c.multi} role="group" aria-label="Text styles">
      {['B', 'I', 'U'].map((t, k) => <button key={t} type="button" aria-pressed={on[k]} aria-label={['Bold', 'Italic', 'Underline'][k]} onClick={() => setOn((o) => o.map((x, j) => (j === k ? !x : x)))}>{t}</button>)}
    </div>
  );
}
