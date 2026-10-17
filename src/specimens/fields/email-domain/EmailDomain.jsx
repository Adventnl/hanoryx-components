import { useState } from 'react';
import c from "../fields.module.css";

/* 29 */ export function EmailDomain() {
  const [v, setV] = useState('ada@');
  const show = /@[\w.]*$/.test(v);
  return (
    <div className={c.domain}>
      <input value={v} inputMode="email" aria-label="Email" onChange={(e) => setV(e.target.value)} />
      {show && <p>{['example.test', 'sample.test', 'mail.test'].map((d) => <button type="button" key={d} onClick={() => setV(v.replace(/@[\w.]*$/, `@${d}`))}>@{d}</button>)}</p>}
    </div>
  );
}
