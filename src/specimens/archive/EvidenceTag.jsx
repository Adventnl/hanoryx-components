import { useState } from 'react';
import c from './archive.module.css';

/* 31 */ export function EvidenceTag() {
  const [v, setV] = useState('CASE 0417');
  return (
    <div className={c.tagBox}>
      <div className={c.etag}><i /><b>{v || '—'}</b><small>ITEM 04 · SEALED</small></div>
      <input className={c.field} value={v} maxLength={12} onChange={(e) => setV(e.target.value.toUpperCase())} aria-label="Case number" spellCheck={false} />
    </div>
  );
}
