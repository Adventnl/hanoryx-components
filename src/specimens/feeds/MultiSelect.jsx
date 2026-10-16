import { useState } from 'react';
import c from './feeds.module.css';
import { Fd } from './shared';

/* 05 */ export function MultiSelect() {
  const [on, setOn] = useState([0, 2]);
  const flip = (k) => setOn((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]));
  return (
    <Fd label="Multi-select list" className={c.list}>
      {['Q3 report', 'Logo.svg', 'Notes.md', 'Budget.xls'].map((t, k) => <button key={t} type="button" role="checkbox" aria-checked={on.includes(k)} className={c.row} onClick={() => flip(k)}><i className={c.tick}>{on.includes(k) ? '✓' : ''}</i><span>{t}</span></button>)}
      <div className={c.bar} data-on={on.length > 0}>{on.length} selected<button type="button" onClick={() => setOn([])}>Clear</button></div>
    </Fd>
  );
}
