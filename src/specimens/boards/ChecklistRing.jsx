import { useState } from 'react';
import c from './boards.module.css';
import { Bd } from './shared';

/* 08 */ export function ChecklistRing() {
  const [on, setOn] = useState([0, 1]);
  const flip = (k) => setOn((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]));
  return (
    <Bd label="Checklist card" className={c.rowFlex}>
      <span className={c.ring} style={{ '--p': on.length * 25 }}><b>{on.length * 25}%</b></span>
      <div className={c.checks}>{['Spec', 'Build', 'Test', 'Ship'].map((t, k) => <button key={t} type="button" role="checkbox" aria-checked={on.includes(k)} onClick={() => flip(k)}><i>{on.includes(k) ? '✓' : ''}</i>{t}</button>)}</div>
    </Bd>
  );
}
