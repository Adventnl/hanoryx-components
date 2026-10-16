import { useState } from 'react';
import c from './popovers.module.css';

/* 20 */ export function FieldErrorTip() {
  const [v, setV] = useState('ada@');
  const bad = !/^\S+@\S+\.\S+$/.test(v);
  return (
    <div className={c.wrap}>
      <input className={c.field} aria-label="Mail" aria-invalid={bad} aria-describedby="tp-20" value={v} onChange={(e) => setV(e.target.value)} />
      <span id="tp-20" role={bad ? 'alert' : undefined} className={`${c.tip} ${c.bottom} ${c.badTip}`} data-open={bad}>Needs a domain, like ada@lab.io</span>
    </div>
  );
}
