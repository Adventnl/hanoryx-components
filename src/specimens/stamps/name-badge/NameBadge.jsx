import { useState } from 'react';
import c from "../stamps.module.css";

/* 18 */ export function NameBadge() {
  const [v, setV] = useState('Ada');
  return (
    <div className={c.badge}>
      <b>HELLO</b><small>my name is</small>
      <input className={c.hand} value={v} maxLength={10} onChange={(e) => setV(e.target.value)} aria-label="Name" spellCheck={false} />
    </div>
  );
}
