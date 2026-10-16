import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './docks.module.css';

/* 9 */ export function ZoomBar() {
  const [z, setZ] = useState(100);
  return (
    <div className={c.zoom} role="group" aria-label="Zoom bar">
      <button type="button" aria-label="Zoom out" disabled={z <= 25} onClick={() => setZ((v) => Math.max(25, v - 25))}><Ico n="minus" /></button>
      <output aria-live="polite">{z}%</output>
      <button type="button" aria-label="Zoom in" disabled={z >= 400} onClick={() => setZ((v) => Math.min(400, v + 25))}><Ico n="plus" /></button>
    </div>
  );
}
