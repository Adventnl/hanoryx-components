import { useState } from 'react';
import c from "../archive.module.css";

/* 04 */ export function HangingFiles() {
  const [s, setS] = useState(1);
  return (
    <div className={c.hang} role="group" aria-label="Hanging files">
      {['Tax', 'Legal', 'Staff', 'Deeds', 'Misc'].map((t, i) => <button key={t} type="button" aria-pressed={s === i} onClick={() => setS(i)}><span>{t}</span><i /></button>)}
    </div>
  );
}
