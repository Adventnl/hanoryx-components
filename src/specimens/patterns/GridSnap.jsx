import { useState } from 'react';
import c from './patterns.module.css';
import { cx } from './shared';

/* 38 */ export function GridSnap() {
  const [h, setH] = useState([2, 3]);
  return (
    <div className={cx(c.sw, c.snap)} role="group" aria-label="Grid cells" onMouseLeave={() => setH([-1, -1])}>
      {Array.from({ length: 40 }, (_, i) => {
        const r = Math.floor(i / 8);
        const k = i % 8;
        return <button key={i} type="button" aria-label={`Row ${r + 1}, column ${k + 1}`} data-hot={r === h[0] && k === h[1] ? 'cell' : r === h[0] || k === h[1] ? 'line' : 'off'} onMouseEnter={() => setH([r, k])} onFocus={() => setH([r, k])} />;
      })}
    </div>
  );
}
