import { useState } from 'react';
import c from "../waypoints.module.css";

/* 2 */ export function OutlineRail() {
  const [hot, setHot] = useState(-1);
  const heads = [['Overview', 0], ['Setup', 1], ['Usage', 1], ['Advanced', 0], ['Limits', 1], ['Credits', 0]];
  return (
    <div className={c.rail} onPointerLeave={() => setHot(-1)}>
      <ul>{heads.map(([t, d], i) => <li key={t} data-hot={i === hot} style={{ '--d': d }}><button type="button" aria-label={`Jump to ${t}`} onPointerEnter={() => setHot(i)} onFocus={() => setHot(i)} onBlur={() => setHot(-1)}><i /><span>{t}</span></button></li>)}</ul>
    </div>
  );
}
