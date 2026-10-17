import { useState } from 'react';
import c from "../figures.module.css";

/* 29 */ export function BaseSwitch() {
  const [text, setText] = useState('2026');
  const n = Math.min(Number(text) || 0, 2 ** 31 - 1);
  const group = (s) => s.replace(/\B(?=(.{4})+$)/g, ' ');
  return (
    <div className={c.fig}>
      <input className={c.input} inputMode="numeric" value={text} maxLength={10} aria-label="A decimal number to convert" onChange={(e) => setText(e.target.value.replace(/\D/g, ''))} />
      <dl className={c.bases}>
        <dt>bin</dt><dd>{group(n.toString(2))}</dd>
        <dt>oct</dt><dd>{n.toString(8)}</dd>
        <dt>hex</dt><dd>{group(n.toString(16).toUpperCase())}</dd>
      </dl>
    </div>
  );
}
