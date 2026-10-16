import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './popovers.module.css';

/* 42 */ export function FlippingPopover() {
  const [pos, setPos] = useState({ x: 40, y: 70 });
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); setPos({ x: clamp(((e.clientX - r.left) / r.width) * 100, 6, 94), y: clamp(((e.clientY - r.top) / r.height) * 100, 12, 90) }); };
  const above = pos.y > 45;
  return (
    <div className={c.flip} onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); move(e); }} onPointerMove={(e) => { if (e.currentTarget.hasPointerCapture?.(e.pointerId)) move(e); }} tabIndex={0} role="application" aria-label="Drag the anchor to the top or bottom edge; the popover flips" onKeyDown={(e) => { const d = { ArrowUp: [0, -10], ArrowDown: [0, 10], ArrowLeft: [-10, 0], ArrowRight: [10, 0] }[e.key]; if (d) { e.preventDefault(); setPos((q) => ({ x: clamp(q.x + d[0], 6, 94), y: clamp(q.y + d[1], 12, 90) })); } }}>
      <i style={{ left: `${pos.x}%`, top: `${pos.y}%` }} />
      <span style={{ left: `${pos.x}%`, top: `${pos.y}%` }} data-above={above}>{above ? 'Flipped above' : 'Fits below'}</span>
    </div>
  );
}
