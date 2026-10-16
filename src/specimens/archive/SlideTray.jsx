import { useState } from 'react';
import c from './archive.module.css';

/* 19 */ export function SlideTray() {
  const [s, setS] = useState(0);
  return (
    <button type="button" className={c.tray} onClick={() => setS((v) => (v + 1) % 6)} aria-label={`Slide tray, slide ${s + 1} of 6. Click to advance`}>
      {Array.from({ length: 6 }, (_, k) => <i key={k} data-on={k === s} style={{ '--h': k * 60 }} />)}
    </button>
  );
}
