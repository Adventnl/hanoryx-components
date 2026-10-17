import { useState } from 'react';
import c from "../editorial.module.css";

export function ImageZoom() {
  const [on, setOn] = useState(false);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-pressed={on} aria-label="Figure; zoom in or out" onClick={() => setOn((v) => !v)}>
      <span className={`${c.frame} ${c.art3} ${on ? c.zoomed : ''}`} />
      <span className={c.note}>Fig. {on ? '2a — detail' : '2 — whole'}</span>
    </button>
  );
}
