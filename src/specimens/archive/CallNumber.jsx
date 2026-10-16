import { useState } from 'react';
import c from './archive.module.css';

/* 16 */ export function CallNumber() {
  const [v, setV] = useState('QA 76.9 D5 H36');
  return (
    <div className={c.callBox}>
      <div className={c.spineLabel}>{(v.trim() || '—').split(/\s+/).slice(0, 4).map((p, i) => <span key={i}>{p}</span>)}</div>
      <input className={c.field} value={v} maxLength={20} onChange={(e) => setV(e.target.value.toUpperCase())} aria-label="Call number" spellCheck={false} />
    </div>
  );
}
