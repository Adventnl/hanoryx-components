import { useState } from 'react';
import c from "../lenses.module.css";
import { Scene } from "../shared";

/* 38 */ export function ClickZoom() {
  const [p, setP] = useState(null);
  return (
    <div className={`${c.area} ${c.clickZoom}`} role="button" tabIndex={0} aria-pressed={Boolean(p)} aria-label="Click to zoom in at that point; click again to reset"
      onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); setP((q) => (q ? null : [((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100])); }}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setP((q) => (q ? null : [50, 50])); } }}>
      <div style={{ transformOrigin: p ? `${p[0]}% ${p[1]}%` : '50% 50%', transform: p ? 'scale(3)' : 'none' }}><Scene /></div>
    </div>
  );
}
