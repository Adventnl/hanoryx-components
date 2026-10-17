import { useRef, useState } from 'react';
import c from "../cursors.module.css";

/* 18 */ export function ClickRipples() {
  const [rs, setRs] = useState([]);
  const n = useRef(0);
  return (
    <div className={`${c.area} ${c.ripples}`} role="application" aria-label="Click for ripples" tabIndex={0} onPointerDown={(e) => { const r = e.currentTarget.getBoundingClientRect(); n.current += 1; const id = n.current; setRs((a) => [...a.slice(-5), { id, x: e.clientX - r.left, y: e.clientY - r.top }]); setTimeout(() => setRs((a) => a.filter((q) => q.id !== id)), 1200); }} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); n.current += 1; const id = n.current; setRs((a) => [...a.slice(-5), { id, x: 100, y: 50 }]); setTimeout(() => setRs((a) => a.filter((q) => q.id !== id)), 1200); } }}>
      <span>Click anywhere</span>{rs.map((q) => <i key={q.id} style={{ left: q.x, top: q.y }} />)}
    </div>
  );
}
