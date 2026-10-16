import { useState } from 'react';
import c from './keypads.module.css';

/* 36 */ export function Pager() {
  const [n, setN] = useState(2);
  return (
    <div className={c.pager}>
      <button type="button" aria-label="Previous page" disabled={n === 0} onClick={() => setN(n - 1)}>‹</button>
      <p>{Array.from({ length: 5 }, (_, i) => <i key={i} data-on={i === n} />)}</p>
      <button type="button" aria-label="Next page" disabled={n === 4} onClick={() => setN(n + 1)}>›</button>
    </div>
  );
}
