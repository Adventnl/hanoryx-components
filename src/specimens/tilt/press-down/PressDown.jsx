import { useState } from 'react';
import c from "../tilt.module.css";

export function PressDown() {
  const [down, setDown] = useState(false);
  const isKey = (e) => e.key === ' ' || e.key === 'Enter';
  return (
    <div className={c.fig}>
      <button
        type="button"
        className={`${c.stage} ${c.reset}`}
        aria-pressed={down}
        aria-label="A card you can press"
        onPointerDown={() => setDown(true)}
        onPointerUp={() => setDown(false)}
        onPointerLeave={() => setDown(false)}
        onPointerCancel={() => setDown(false)}
        onBlur={() => setDown(false)}
        onKeyDown={(e) => { if (isKey(e) && !e.repeat) { e.preventDefault(); setDown(true); } }}
        onKeyUp={(e) => { if (isKey(e)) setDown(false); }}
      >
        <span className={`${c.card} ${c.press}`} data-down={down}><b>Press</b><span>{down ? 'pressed' : 'hold me'}</span></span>
      </button>
    </div>
  );
}
