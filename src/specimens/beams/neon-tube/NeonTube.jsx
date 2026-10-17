import { useState } from 'react';
import c from "../beams.module.css";

/* 07 */ export function NeonTube() {
  const [on, setOn] = useState(true);
  return (
    <button type="button" className={c.sw} aria-pressed={on} onClick={() => setOn((v) => !v)} aria-label="Neon tube. Click to switch it off">
      <svg viewBox="0 0 110 64" className={c.sv} aria-hidden="true"><path className={c.neon} data-on={on} d="M22 14V50M44 14V50M22 32H44M62 14L90 50M90 14L62 50" /></svg>
    </button>
  );
}
