import { useState } from 'react';
import c from "../waypoints.module.css";

/* 37 */ export function AnnotationPins() {
  const [k, setK] = useState(-1);
  const notes = [[24, 34, 'Chimney'], [58, 60, 'Doorway'], [78, 28, 'Weather vane']];
  return (
    <div className={c.annot} onPointerLeave={() => setK(-1)}>
      <svg viewBox="0 0 100 60" aria-hidden="true"><path d="M10 54V28L30 12l20 16v26M50 28l16-10 24 12v24H50M28 54V36h10v18" /></svg>
      {notes.map(([x, y, t], i) => <button key={t} type="button" style={{ left: `${x}%`, top: `${y}%` }} aria-label={t} aria-expanded={k === i} onPointerEnter={() => setK(i)} onFocus={() => setK(i)} onBlur={() => setK(-1)}><span>{i + 1}</span>{k === i && <em>{t}</em>}</button>)}
    </div>
  );
}
