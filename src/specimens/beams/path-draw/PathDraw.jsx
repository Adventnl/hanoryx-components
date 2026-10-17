import { useState } from 'react';
import c from "../beams.module.css";

/* 40 */ export function PathDraw() {
  const [n, setN] = useState(1);
  return (
    <button type="button" className={c.sw} onClick={() => setN((v) => v + 1)} aria-label="Route trace. Click to draw it again">
      <svg viewBox="0 0 110 64" className={c.sv} aria-hidden="true">
        <path d="M10 52C30 52 28 20 50 20S70 50 96 14" className={c.base} />
        <path key={n} d="M10 52C30 52 28 20 50 20S70 50 96 14" pathLength="100" className={c.draw} />
        <circle cx="10" cy="52" r="3" className={c.dot} /><circle key={`e${n}`} cx="96" cy="14" r="3.4" className={c.endpin} />
      </svg>
    </button>
  );
}
