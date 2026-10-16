import { useState } from 'react';
import c from './beams.module.css';

/* 38 */ export function StrobeBars() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={c.sw} onClick={() => setN((v) => v + 1)} aria-label="Strobe bars. Click to fire them">
      <div className={c.bars} key={n} data-go={n > 0}>{Array.from({ length: 9 }, (_, k) => <i key={k} style={{ '--k': k }} />)}</div>
    </button>
  );
}
