import { useState } from 'react';
import c from "../glow.module.css";

export function GlowField() {
  const [v, setV] = useState('');
  return (
    <div className={c.fig}>
      <label className={c.field}>
        <input value={v} onChange={(e) => setV(e.target.value)} placeholder="Type here" aria-label="A field that glows while you type" spellCheck="false" autoComplete="off" />
      </label>
    </div>
  );
}
