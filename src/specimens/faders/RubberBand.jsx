import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './faders.module.css';

/* 21 */ export function RubberBand() {
  const [s, setS] = useState({ x: 0.5, dy: 0 });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setS({ x: clamp((e.clientX - r.left) / r.width), dy: clamp(e.clientY - (r.top + r.height / 2), -44, 44) });
  };
  const x = s.x * 100;
  const dy = s.dy;
  const left = Math.hypot(x, dy);
  const right = Math.hypot(100 - x, dy);
  return (
    <div className={c.band} aria-label="Rubber band" role="slider" tabIndex={0} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(s.x * 100)} style={{ touchAction: 'none' }}
      onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); move(e); }}
      onPointerMove={(e) => { if (e.currentTarget.hasPointerCapture?.(e.pointerId)) move(e); }}
      onPointerUp={() => setS((p) => ({ ...p, dy: 0 }))}
      onKeyDown={(e) => { if (e.key === 'ArrowRight') setS((p) => ({ ...p, x: clamp(p.x + 0.05) })); if (e.key === 'ArrowLeft') setS((p) => ({ ...p, x: clamp(p.x - 0.05) })); }}>
      <u style={{ width: `${left}%`, transform: `rotate(${Math.atan2(dy, x) * 57.2958}deg)` }} />
      <u style={{ width: `${right}%`, left: `${x}%`, transform: `translateY(${dy}px) rotate(${Math.atan2(-dy, 100 - x) * 57.2958}deg)` }} />
      <i style={{ left: `${x}%`, transform: `translate(-50%, calc(-50% + ${dy}px))` }} />
    </div>
  );
}
