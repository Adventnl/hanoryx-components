import { useState } from 'react';
import c from './waypoints.module.css';

/* 38 */ export function LandmarkIndex() {
  const [k, setK] = useState('C');
  const list = { A: ['Abbey'], B: ['Bridge', 'Belfry'], C: ['Castle', 'Cathedral'], D: ['Dock'] };
  return (
    <div className={c.lm}>
      <div role="tablist" aria-label="Letters">{Object.keys(list).map((l) => <button key={l} type="button" role="tab" aria-selected={k === l} onClick={() => setK(l)}>{l}</button>)}</div>
      <ul>{list[k].map((t) => <li key={t}>{t}</li>)}</ul>
    </div>
  );
}
