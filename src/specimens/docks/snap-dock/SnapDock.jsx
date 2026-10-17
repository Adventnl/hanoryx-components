import { useState } from 'react';
import c from "../docks.module.css";

/* 20 */ export function SnapDock() {
  const [at, setAt] = useState('bottom');
  return (
    <div className={c.snap}>
      <div className={c.snapStage} data-at={at}><i aria-hidden="true" /></div>
      <div role="radiogroup" aria-label="Dock position">{['left', 'bottom', 'right'].map((p) => <button key={p} type="button" role="radio" aria-checked={at === p} onClick={() => setAt(p)}>{p}</button>)}</div>
    </div>
  );
}
