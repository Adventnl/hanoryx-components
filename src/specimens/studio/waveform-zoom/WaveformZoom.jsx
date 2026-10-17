import { useState } from 'react';
import c from "../studio.module.css";
import { WAVE } from "../shared";

/* 12 */ export function WaveformZoom() {
  const [z, setZ] = useState(0.3);
  return (
    <div className={c.zoomWave}>
      <div><div style={{ '--z': 1 + z * 3 }}>{WAVE.map((h, k) => <u key={k} style={{ height: `${h * 100}%` }} />)}</div></div>
      <input type="range" min="0" max="1" step="0.01" value={z} onChange={(e) => setZ(Number(e.target.value))} aria-label="Waveform zoom" />
    </div>
  );
}
