import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../terminal.module.css";

/* 36 */ export function SecretPrompt() {
  const [v, setV] = useState('');
  const [show, setShow] = useState(false);
  const score = Math.min(4, Math.floor(v.length / 3));
  return (
    <div className={c.win}>
      <label className={c.ln}><span className={c.dim}>password:</span> <input className={c.plain} type={show ? 'text' : 'password'} value={v} onChange={(e) => setV(e.target.value)} aria-label="Password" autoComplete="off" /></label>
      <div className={c.strength} data-s={score}>{[0, 1, 2, 3].map((k) => <i key={k} data-on={score > k} />)}</div>
      <button type="button" className={c.key} aria-pressed={show} onClick={() => setShow((s) => !s)}><Ico n="eye" /></button>
    </div>
  );
}
