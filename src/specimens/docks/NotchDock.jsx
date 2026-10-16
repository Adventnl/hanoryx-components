import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './docks.module.css';

/* 41 */ export function NotchDock() {
  const [k, setK] = useState(1);
  return (
    <div className={c.notch} role="toolbar" aria-label="Notch dock" style={{ '--k': k }}>
      {['home', 'heart', 'plus', 'bell', 'user'].map((n, i) => <button key={n} type="button" aria-label={n} aria-pressed={i === k} onClick={() => setK(i)}><Ico n={n} /></button>)}
      <i aria-hidden="true" />
    </div>
  );
}
