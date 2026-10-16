import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './steps.module.css';

/* 31 */ export function PathBar() {
  const [at, setAt] = useState(3);
  const parts = ['~', 'work', 'notes', '2024', 'draft.md'];
  return (
    <nav className={c.pathbar} aria-label="Path bar">
      <button type="button" aria-label="Up one level" disabled={at === 0} onClick={() => setAt(at - 1)}><Ico n="up" /></button>
      <div>{parts.slice(0, at + 1).map((p, k) => <button key={p} type="button" aria-current={k === at ? 'page' : undefined} onClick={() => setAt(k)}>{p}</button>)}</div>
    </nav>
  );
}
