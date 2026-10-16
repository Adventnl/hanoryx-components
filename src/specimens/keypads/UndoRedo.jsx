import { useState } from 'react';
import c from './keypads.module.css';

/* 33 */ export function UndoRedo() {
  const [past, setPast] = useState(['A']);
  const [future, setFuture] = useState([]);
  return (
    <div className={c.undo}>
      <button type="button" aria-label="Undo" disabled={past.length < 2} onClick={() => { setFuture((f) => [past[past.length - 1], ...f]); setPast((p) => p.slice(0, -1)); }}>↶</button>
      <output>{past.join(' ')}</output>
      <button type="button" aria-label="Redo" disabled={!future.length} onClick={() => { setPast((p) => [...p, future[0]]); setFuture((f) => f.slice(1)); }}>↷</button>
      <button type="button" aria-label="Add a step" onClick={() => { setPast((p) => [...p, String.fromCharCode(65 + p.length)].slice(-8)); setFuture([]); }}>+</button>
    </div>
  );
}
