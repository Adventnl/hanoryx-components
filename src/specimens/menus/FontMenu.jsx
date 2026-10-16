import { useState } from 'react';
import c from './menus.module.css';

/* 37 */ export function FontMenu() {
  const [k, setK] = useState(0);
  const fonts = [['Serif', 'var(--font-serif)'], ['Sans', 'var(--font-sans)'], ['Mono', 'var(--font-mono)']];
  return (
    <div className={c.fonts} role="radiogroup" aria-label="Font menu">
      {fonts.map(([n, f], i) => <button key={n} type="button" role="radio" aria-checked={i === k} style={{ fontFamily: f }} onClick={() => setK(i)}>{n} — Aa Gg 123</button>)}
    </div>
  );
}
