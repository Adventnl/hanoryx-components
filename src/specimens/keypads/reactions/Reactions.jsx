import { useState } from 'react';
import c from "../keypads.module.css";

/* 34 */ export function Reactions() {
  const [k, setK] = useState(null);
  return (
    <div className={c.react} role="group" aria-label="Reactions">
      {['♥', '★', '✦', '◆'].map((t, i) => <button type="button" key={t} aria-label={`React ${t}`} aria-pressed={k === i} onClick={() => setK(k === i ? null : i)}>{t}</button>)}
    </div>
  );
}
