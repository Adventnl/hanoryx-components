import { useState } from 'react';
import c from "../fields.module.css";

/* 12 */ export function SwatchInput() {
  const sw = ['#ff3333', '#e8e9ee', '#9a9ba3', '#5c5d65', '#2a2b30', '#7d1010'];
  const [k, setK] = useState(0);
  return (
    <div className={c.swatch}>
      <div role="radiogroup" aria-label="Colour">{sw.map((x, i) => <button type="button" key={x} role="radio" aria-checked={k === i} aria-label={x} style={{ background: x }} onClick={() => setK(i)} />)}</div>
      <output>{sw[k].toUpperCase()}</output>
    </div>
  );
}
