import { useState } from 'react';
import c from './signals.module.css';

/* 16 */ export function SeverityScale() {
  const lv = ['Info', 'Low', 'Medium', 'High', 'Critical'];
  const [k, setK] = useState(3);
  return (
    <div className={c.sev}>
      <ul role="radiogroup" aria-label="Severity">{lv.map((t, i) => <li key={t}><button type="button" role="radio" aria-checked={i === k} data-s={i} onClick={() => setK(i)}>{t}</button></li>)}</ul>
    </div>
  );
}
