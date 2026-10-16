import { useState } from 'react';
import c from './boards.module.css';
import { Bd } from './shared';

/* 07 */ export function LabelFilter() {
  const [f, setF] = useState('all');
  const T = [['Fix login', 'bug'], ['Dark mode', 'feat'], ['Bump deps', 'chore'], ['Crash on save', 'bug'], ['Export CSV', 'feat']];
  return (
    <Bd label="Label filter" className={c.one}>
      <div className={c.chips} role="group" aria-label="Filter">{['all', 'bug', 'feat', 'chore'].map((l) => <button key={l} type="button" className={c.chip} data-l={l} aria-pressed={f === l} onClick={() => setF(l)}>{l}</button>)}</div>
      {T.filter(([, l]) => f === 'all' || l === f).map(([t, l]) => <span key={t} className={c.cd} data-l={l}>{t}</span>)}
    </Bd>
  );
}
