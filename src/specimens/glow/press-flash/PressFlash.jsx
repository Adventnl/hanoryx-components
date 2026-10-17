import { useState } from 'react';
import c from "../glow.module.css";

export function PressFlash() {
  const [n, setN] = useState(0);
  const [at, setAt] = useState([50, 50]);
  return (
    <button
      type="button"
      className={`${c.fig} ${c.reset}`}
      aria-label="A card that flashes where it is pressed"
      onPointerDown={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setAt([((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100]);
        setN((v) => v + 1);
      }}
      onClick={(e) => { if (e.detail === 0) setN((v) => v + 1); }}
    >
      <span className={`${c.card} ${c.press}`} style={{ '--lx': `${at[0]}%`, '--ly': `${at[1]}%` }}>
        <i key={n} className={n ? c.flashRing : ''} /><b>Press</b><span>flash where you touch</span>
      </span>
    </button>
  );
}
