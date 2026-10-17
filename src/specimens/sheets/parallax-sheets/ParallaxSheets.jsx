import { useState } from 'react';
import { clamp } from "../../../stage/hooks";
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 29 */ export function ParallaxSheets() {
  const [p, setP] = useState(0.5);
  return (
    <Stage label="Parallax sheets">
      <div className={c.para} onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setP(clamp((e.clientX - r.left) / r.width)); }} tabIndex={0} role="application" aria-label="Move across to slide the layers" onKeyDown={(e) => { if (e.key === 'ArrowLeft') setP((v) => clamp(v - 0.1)); if (e.key === 'ArrowRight') setP((v) => clamp(v + 0.1)); }}>
        {[0, 1, 2].map((k) => <i key={k} style={{ '--k': k, '--p': p }} />)}
      </div>
    </Stage>
  );
}
