import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './steps.module.css';

/* 10 */ export function PageNumbers() {
  const [p, setP] = useState(5);
  const list = [1, p > 3 ? '…' : 2, ...[p - 1, p, p + 1].filter((x) => x > 1 && x < 9), p < 7 ? '…' : 8, 9].filter((x, i, a) => a.indexOf(x) === i || x === '…');
  return (
    <nav className={c.pages} aria-label="Pagination">
      <button type="button" aria-label="Previous page" disabled={p === 1} onClick={() => setP(p - 1)}><Ico n="left" /></button>
      {list.map((n, k) => (typeof n === 'number' ? <button key={n} type="button" aria-current={n === p ? 'page' : undefined} onClick={() => setP(n)}>{n}</button> : <span key={`e${k}`} aria-hidden="true">…</span>))}
      <button type="button" aria-label="Next page" disabled={p === 9} onClick={() => setP(p + 1)}><Ico n="right" /></button>
    </nav>
  );
}
