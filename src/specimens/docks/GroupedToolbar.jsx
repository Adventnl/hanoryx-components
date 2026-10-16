import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './docks.module.css';

/* 3 */ export function GroupedToolbar() {
  const [on, setOn] = useState({ pen: true });
  const flip = (n) => setOn((o) => ({ ...o, [n]: !o[n] }));
  const groups = [['pen', 'copy'], ['link', 'image'], ['share', 'download']];
  return (
    <div className={c.grouped} role="toolbar" aria-label="Grouped toolbar">
      {groups.map((g, gi) => (
        <span key={gi}>{g.map((n) => <button key={n} type="button" aria-label={n} aria-pressed={!!on[n]} onClick={() => flip(n)}><Ico n={n} /></button>)}</span>
      ))}
    </div>
  );
}
