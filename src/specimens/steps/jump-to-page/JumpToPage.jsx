import { useState } from 'react';
import { clamp } from "../../../stage/hooks";
import c from "../steps.module.css";

/* 13 */ export function JumpToPage() {
  const [v, setV] = useState('4');
  const [at, setAt] = useState(4);
  return (
    <form className={c.jump} onSubmit={(e) => { e.preventDefault(); const n = clamp(parseInt(v, 10) || 1, 1, 20); setAt(n); setV(String(n)); }}>
      <label>Go to page<input inputMode="numeric" value={v} onChange={(e) => setV(e.target.value.replace(/\D/g, '').slice(0, 2))} /></label>
      <button type="submit">Go</button>
      <output>Now on {at}</output>
    </form>
  );
}
