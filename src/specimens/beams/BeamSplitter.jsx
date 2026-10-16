import { useState } from 'react';
import c from './beams.module.css';

/* 35 */ export function BeamSplitter() {
  const [on, setOn] = useState(true);
  return (
    <button type="button" className={c.sw} aria-pressed={on} onClick={() => setOn((v) => !v)} aria-label="Beam splitter. Click to turn the mirror">
      <svg viewBox="0 0 110 64" className={c.sv} aria-hidden="true">
        <path d="M0 32H55" className={c.white} />
        <path d="M55 32H110" className={c.white} style={{ opacity: on ? 0.6 : 1 }} />
        <path d="M55 32V0" className={c.white} style={{ opacity: on ? 1 : 0 }} />
        <rect x="49" y="26" width="12" height="12" className={c.glass} transform={`rotate(${on ? 45 : 0} 55 32)`} style={{ transition: 'transform 0.4s' }} />
      </svg>
    </button>
  );
}
