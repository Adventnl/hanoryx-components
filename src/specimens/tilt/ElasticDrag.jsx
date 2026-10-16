import { useRef, useState } from 'react';
import c from './tilt.module.css';

export function ElasticDrag() {
  const [off, setOff] = useState({ x: 0, y: 0, drag: false });
  const start = useRef(null);
  const down = (e) => { e.currentTarget.setPointerCapture?.(e.pointerId); start.current = [e.clientX, e.clientY]; setOff((o) => ({ ...o, drag: true })); };
  const move = (e) => { if (start.current) setOff({ x: Math.max(-70, Math.min(70, e.clientX - start.current[0])), y: Math.max(-26, Math.min(26, e.clientY - start.current[1])), drag: true }); };
  const up = () => { start.current = null; setOff({ x: 0, y: 0, drag: false }); };
  const key = (e) => {
    const d = { ArrowLeft: [-30, 0], ArrowRight: [30, 0], ArrowUp: [0, -14], ArrowDown: [0, 14] }[e.key];
    if (d) { e.preventDefault(); setOff((o) => ({ x: Math.max(-70, Math.min(70, o.x + d[0])), y: Math.max(-26, Math.min(26, o.y + d[1])), drag: true })); }
    if (e.key === 'Escape' || e.key === 'Enter') up();
  };
  return (
    <div className={c.fig}>
      <div className={c.stage}>
        <div role="application" aria-roledescription="draggable card" aria-label="Drag the card; it springs back" tabIndex={0} className={`${c.card} ${c.elastic}`} data-drag={off.drag} style={{ transform: `translate(${off.x}px, ${off.y}px) rotate(${off.x * 0.14}deg)`, touchAction: 'none' }} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onKeyDown={key} onBlur={up}>
          <b>Elastic</b><span>pull and let go</span>
        </div>
      </div>
    </div>
  );
}
