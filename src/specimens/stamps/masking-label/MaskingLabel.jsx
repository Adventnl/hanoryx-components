import { useState } from 'react';
import c from "../stamps.module.css";

/* 13 */ export function MaskingLabel() {
  const [v, setV] = useState('dont touch');
  return (
    <div className={c.maskWrap}>
      <div className={c.mask}><span>{v || ' '}</span></div>
      <input className={c.field} value={v} maxLength={16} onChange={(e) => setV(e.target.value)} aria-label="Label text" spellCheck={false} />
    </div>
  );
}
