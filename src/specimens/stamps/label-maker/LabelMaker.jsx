import { useState } from 'react';
import c from "../stamps.module.css";

/* 41 */ export function LabelMaker() {
  const [v, setV] = useState('SPARE KEYS');
  return (
    <div className={c.maker}>
      <div className={c.strip}><span>{v.toUpperCase()}</span></div>
      <input className={c.field} value={v} maxLength={14} onChange={(e) => setV(e.target.value)} aria-label="Label text" spellCheck={false} />
    </div>
  );
}
