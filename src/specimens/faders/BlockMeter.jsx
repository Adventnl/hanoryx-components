import { useState } from 'react';
import c from './faders.module.css';

/* 12 */ export function BlockMeter() {
  const [n, setN] = useState(6);
  return (
    <div className={c.block} role="group" aria-label="Block meter">
      {Array.from({ length: 12 }, (_, i) => <button type="button" key={i} aria-label={`Level ${i + 1}`} aria-pressed={i < n} data-hot={i > 8} onClick={() => setN(i + 1 === n ? i : i + 1)} />)}
    </div>
  );
}
