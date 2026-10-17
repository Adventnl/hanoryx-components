import { useState } from 'react';
import c from "../dials.module.css";

/* 13 */ export function PieMenu() {
  const [k, setK] = useState(2);
  const labels = ['Cut', 'Copy', 'Paste', 'Undo', 'Redo', 'Find'];
  return (
    <div className={c.pie}>
      {labels.map((t, i) => <button type="button" key={t} aria-pressed={k === i} style={{ '--i': i }} onClick={() => setK(i)}><span>{t}</span></button>)}
      <output>{labels[k]}</output>
    </div>
  );
}
