import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './docks.module.css';

/* 23 */ export function GlowDock() {
  const [k, setK] = useState(1);
  return (
    <div className={c.glow} role="toolbar" aria-label="Glow dock" style={{ '--k': k }}>
      {['home', 'bolt', 'heart', 'user'].map((n, i) => <button key={n} type="button" aria-label={n} aria-pressed={i === k} onClick={() => setK(i)}><Ico n={n} /></button>)}
      <i aria-hidden="true" />
    </div>
  );
}
