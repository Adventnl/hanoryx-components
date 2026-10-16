import { useState } from 'react';
import c from './waypoints.module.css';
import { DOC } from './shared';

/* 36 */ export function JumpSelect() {
  const [v, setV] = useState('Method');
  return (
    <label className={c.jumpSel}>
      <span>Jump to</span>
      <select value={v} onChange={(e) => setV(e.target.value)}>{DOC.map((t) => <option key={t}>{t}</option>)}</select>
      <output>→ #{v.toLowerCase()}</output>
    </label>
  );
}
