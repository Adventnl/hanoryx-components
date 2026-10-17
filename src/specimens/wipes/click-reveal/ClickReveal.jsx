import { useState } from 'react';
import c from "../wipes.module.css";

/* 42 */ export function ClickReveal() {
  const [p, setP] = useState(null);
  return (
    <div className={`${c.wipe} ${c.spot}`} data-on={Boolean(p)} style={p ? { '--cx': `${p[0]}px`, '--cy': `${p[1]}px` } : undefined} role="application" aria-label="Click to open a circle of B from that point; press Enter for the middle" tabIndex={0}
      onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); setP((q) => (q ? null : [e.clientX - r.left, e.clientY - r.top])); }}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setP((q) => (q ? null : [100, 60])); } }}>
      <span className={c.a}><b>A</b></span>
      <span className={c.b}><b>B</b></span>
    </div>
  );
}
