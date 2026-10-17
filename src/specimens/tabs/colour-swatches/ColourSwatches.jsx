import { useState } from 'react';
import c from "../tabs.module.css";

/* 42 */ export function ColourSwatches() {
  const [k, setK] = useState(0);
  const hues = ['#ff3333', '#ffb347', '#6ee7b7', '#7aa2ff'];
  return (
    <div className={c.swatch} role="tablist" aria-label="Colour tabs" style={{ '--tone': hues[k] }}>
      {hues.map((h, i) => <button key={h} type="button" role="tab" aria-selected={i === k} aria-label={`Colour ${i + 1}`} style={{ '--h': h }} onClick={() => setK(i)} />)}
      <output>{hues[k]}</output>
    </div>
  );
}
