import { useState } from 'react';
import c from './archive.module.css';

/* 11 */ export function PaperPile() {
  const [n, setN] = useState(4);
  return (
    <button type="button" className={c.pile} onClick={() => setN((v) => (v >= 9 ? 1 : v + 1))} aria-label={`${n} sheets. Click to add one`}>
      {Array.from({ length: n }, (_, k) => <i key={k} style={{ '--k': k, '--r': `${((k * 37) % 7) - 3}deg` }} />)}
      <small>{n}</small>
    </button>
  );
}
