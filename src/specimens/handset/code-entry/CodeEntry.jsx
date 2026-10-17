import { useState } from 'react';
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 06 */ export function CodeEntry() {
  const [v, setV] = useState('48');
  return (
    <Phone label="Code entry" className={c.center}>
      <b className={c.h}>Enter code</b>
      <label className={c.codeBox}>
        {[0, 1, 2, 3].map((k) => <i key={k} data-on={v.length === k}>{v[k] ?? ''}</i>)}
        <input value={v} onChange={(e) => setV(e.target.value.replace(/\D/g, '').slice(0, 4))} inputMode="numeric" maxLength={4} aria-label="Four digit code" />
      </label>
      <span className={c.p}>{v.length === 4 ? 'Checking…' : 'Sent to ••• 21'}</span>
    </Phone>
  );
}
