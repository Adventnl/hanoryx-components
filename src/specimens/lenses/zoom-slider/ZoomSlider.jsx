import { useState } from 'react';
import c from "../lenses.module.css";
import { Scene } from "../shared";

/* 16 */ export function ZoomSlider() {
  const [v, setV] = useState(0.4);
  return (
    <div className={c.zoomSteps}>
      <div className={c.viewport}><div style={{ '--z': 1 + v * 4 }}><Scene /></div></div>
      <input type="range" min="0" max="1" step="0.01" value={v} onChange={(e) => setV(Number(e.target.value))} aria-label="Zoom" />
    </div>
  );
}
