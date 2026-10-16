import { useState } from 'react';
import c from './terminal.module.css';

/* 37 */ export function ConfirmPrompt() {
  const [a, setA] = useState('');
  return (
    <div className={c.win} tabIndex={0} role="group" aria-label="Confirm: press y or n"
      onKeyDown={(e) => { const k = e.key.toLowerCase(); if (k === 'y') setA('y'); else if (k === 'n' || k === 'enter') setA('n'); }}>
      <p className={c.ln}>Delete 3 files? <span className={c.dim}>[y/N]</span> <b className={a === 'y' ? c.err : c.ok}>{a}</b></p>
      <div className={c.keys}>
        <button type="button" className={c.key} onClick={() => setA('y')}>y</button>
        <button type="button" className={c.key} onClick={() => setA('n')}>n</button>
        {a && <small className={c.dim}>{a === 'y' ? 'removed' : 'kept'}</small>}
      </div>
    </div>
  );
}
