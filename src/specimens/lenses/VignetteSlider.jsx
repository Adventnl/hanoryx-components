import { useState } from 'react';
import c from './lenses.module.css';
import { Scene } from './shared';

/* 41 */ export function VignetteSlider() {
  const [v, setV] = useState(0.5);
  return (
    <div className={c.zoomSteps}>
      <div className={`${c.area} ${c.vig}`} style={{ '--v': v }}><Scene className={c.fill} /><div /></div>
      <input type="range" min="0" max="1" step="0.01" value={v} onChange={(e) => setV(Number(e.target.value))} aria-label="Vignette strength" />
    </div>
  );
}
