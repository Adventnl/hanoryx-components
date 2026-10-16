import { useState } from 'react';
import { rng } from '../../stage/hooks';
import c from './signals.module.css';

/* 37 */ export function StatusGrid() {
  const rows = ['API', 'Web', 'Mail'];
  const r = rng(3);
  const [cells] = useState(() => rows.map(() => Array.from({ length: 10 }, () => { const v = r(); return v > 0.93 ? 'bad' : v > 0.82 ? 'warn' : 'ok'; })));
  return (
    <div className={c.sgrid} role="table" aria-label="Status by day">
      {rows.map((n, i) => <div key={n} role="row"><span role="rowheader">{n}</span>{cells[i].map((t, k) => <i key={k} role="cell" data-t={t} aria-label={`${n} day ${k + 1}: ${t === 'ok' ? 'fine' : t === 'warn' ? 'slow' : 'down'}`} />)}</div>)}
    </div>
  );
}
