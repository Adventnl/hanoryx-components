import { useState } from 'react';
import c from './waypoints.module.css';
import { DOC } from './shared';

/* 5 */ export function SectionDots() {
  const [k, setK] = useState(2);
  return (
    <ul className={c.sdots} aria-label="Section dots">
      {DOC.map((t, i) => <li key={t}><button type="button" aria-label={t} aria-current={i === k ? 'true' : undefined} onClick={() => setK(i)}><i /><span>{t}</span></button></li>)}
    </ul>
  );
}
