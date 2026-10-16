import { useState } from 'react';
import c from './signals.module.css';

/* 17 */ export function AnnunciatorPanel() {
  const [on, setOn] = useState([true, false, true, false, false, true]);
  const names = ['OIL', 'FUEL', 'TEMP', 'DOOR', 'GEN', 'HYD'];
  return (
    <div className={c.ann} role="group" aria-label="Annunciator panel">
      {names.map((n, k) => <button key={n} type="button" aria-pressed={on[k]} onClick={() => setOn((a) => a.map((x, j) => (j === k ? !x : x)))} data-w={k % 2}>{n}</button>)}
    </div>
  );
}
