import { useState } from 'react';
import { clamp } from "../../../stage/hooks";
import c from "../lenses.module.css";
import { Scene } from "../shared";

/* 39 */ export function PanWindow() {
  const [pos, setPos] = useState([0.3, 0.4]);
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); setPos([clamp((e.clientX - r.left) / r.width), clamp((e.clientY - r.top) / r.height)]); };
  return (
    <div className={`${c.area} ${c.pan}`} role="application" aria-label="Drag to pan the picture" tabIndex={0} onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); move(e); }} onPointerMove={(e) => { if (e.currentTarget.hasPointerCapture?.(e.pointerId)) move(e); }} onKeyDown={(e) => { const d = { ArrowLeft: [-0.1, 0], ArrowRight: [0.1, 0], ArrowUp: [0, -0.1], ArrowDown: [0, 0.1] }[e.key]; if (d) { e.preventDefault(); setPos((q) => [clamp(q[0] + d[0]), clamp(q[1] + d[1])]); } }}>
      <div style={{ '--px': pos[0], '--py': pos[1] }}><Scene /></div>
    </div>
  );
}
