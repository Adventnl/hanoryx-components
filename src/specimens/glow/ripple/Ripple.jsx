import { useState } from 'react';
import c from "../glow.module.css";

export function Ripple() {
  const [rip, setRip] = useState(null);
  return (
    <button
      type="button"
      className={`${c.fig} ${c.reset}`}
      aria-label="A card that ripples where you press"
      onPointerDown={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setRip({ x: e.clientX - r.left, y: e.clientY - r.top, k: Date.now() });
      }}
    >
      <span className={`${c.card} ${c.ripple}`}>
        {rip ? <i key={rip.k} style={{ left: rip.x, top: rip.y }} /> : null}
        <b>Ripple</b><span>press anywhere</span>
      </span>
    </button>
  );
}
