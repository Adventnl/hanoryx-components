import { useState } from 'react';
import c from "../fields.module.css";

/* 35 */ export function FormatBar() {
  const [f, setF] = useState({ b: false, i: false, u: false });
  return (
    <div className={c.format}>
      <div role="group" aria-label="Format">{[['b', 'B'], ['i', 'I'], ['u', 'U']].map(([k, t]) => <button type="button" key={k} aria-pressed={f[k]} aria-label={t === 'B' ? 'Bold' : t === 'I' ? 'Italic' : 'Underline'} data-k={k} onClick={() => setF({ ...f, [k]: !f[k] })}>{t}</button>)}</div>
      <p style={{ fontWeight: f.b ? 700 : 300, fontStyle: f.i ? 'italic' : 'normal', textDecoration: f.u ? 'underline' : 'none' }}>The quick sample sentence.</p>
    </div>
  );
}
