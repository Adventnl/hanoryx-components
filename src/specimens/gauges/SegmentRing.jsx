import { useState } from 'react';
import c from './gauges.module.css';
import { arc } from './shared';

/* 31 */ export function SegmentRing() {
  const [n, setN] = useState(7);
  return (
    <button type="button" className={c.segring} aria-label={`Segment ring, ${n} of 12 lit. Click to light another`} onClick={() => setN((n + 1) % 13)}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => <path key={i} data-on={i < n} data-last={i === n - 1} d={arc(50, 50, 40, i * 30 + 3, i * 30 + 27)} />)}
      </svg>
      <b>{n}</b>
    </button>
  );
}
