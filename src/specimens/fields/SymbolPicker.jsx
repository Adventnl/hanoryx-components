import { useState } from 'react';
import c from './fields.module.css';

/* 33 */ export function SymbolPicker() {
  const [t, setT] = useState('');
  return (
    <div className={c.symbols}>
      <output>{t || 'pick some'}</output>
      <div>{[...'→←↑↓✓✕★◆●■▲≈'].map((s) => <button type="button" key={s} aria-label={`Insert ${s}`} onClick={() => setT((x) => (x + s).slice(-12))}>{s}</button>)}</div>
    </div>
  );
}
