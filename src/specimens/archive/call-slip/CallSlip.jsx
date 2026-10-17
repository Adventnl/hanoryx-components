import { useState } from 'react';
import c from "../archive.module.css";

/* 34 */ export function CallSlip() {
  const [t, setT] = useState('Parish records');
  const [rush, setRush] = useState(false);
  return (
    <div className={c.slipForm}>
      <b>CALL SLIP</b>
      <input className={c.field} value={t} maxLength={22} onChange={(e) => setT(e.target.value)} aria-label="Title wanted" spellCheck={false} />
      <label><input type="checkbox" checked={rush} onChange={(e) => setRush(e.target.checked)} /> rush</label>
      <small>{rush ? 'in 1 hour' : 'next day'} · {t.length} characters</small>
    </div>
  );
}
