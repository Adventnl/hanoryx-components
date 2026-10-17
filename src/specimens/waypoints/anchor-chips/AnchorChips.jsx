import { useState } from 'react';
import c from "../waypoints.module.css";

/* 6 */ export function AnchorChips() {
  const [k, setK] = useState('');
  return (
    <div className={c.chips}>
      <div role="group" aria-label="Jump to">{['#intro', '#method', '#results', '#notes'].map((h) => <button key={h} type="button" aria-pressed={k === h} onClick={() => setK(h)}>{h}</button>)}</div>
      <output>{k ? `location.hash = "${k}"` : 'no anchor'}</output>
    </div>
  );
}
