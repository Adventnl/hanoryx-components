import { useState } from 'react';
import c from "../lenses.module.css";
import { Scene } from "../shared";

/* 15 */ export function ZoomSteps() {
  const [k, setK] = useState(1);
  return (
    <div className={c.zoomSteps}>
      <div className={c.viewport}><div style={{ '--z': [1, 2, 4][k] }}><Scene /></div></div>
      <div role="radiogroup" aria-label="Zoom level">{['1×', '2×', '4×'].map((t, i) => <button key={t} type="button" role="radio" aria-checked={i === k} onClick={() => setK(i)}>{t}</button>)}</div>
    </div>
  );
}
