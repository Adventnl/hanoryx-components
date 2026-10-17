import { useState } from 'react';
import c from "../faders.module.css";

/* 3 */ export function SteppedSlider() {
  const [n, setN] = useState(4);
  return (
    <div className={c.stepped}>
      <input type="range" min="0" max="10" step="1" value={n} aria-label="Stepped slider" onChange={(e) => setN(Number(e.target.value))} />
      <ol>{Array.from({ length: 11 }, (_, i) => <li key={i} data-on={i <= n} />)}</ol>
      <output>{n} / 10</output>
    </div>
  );
}
