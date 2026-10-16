import { useState } from 'react';
import c from './dials.module.css';

/* 24 */ export function Stepped6Way() {
  const [n, setN] = useState(2);
  return (
    <button type="button" className={c.stepped} style={{ '--n': n }} aria-label={`Selector, position ${n + 1} of 6. Press to advance`} onClick={() => setN((n + 1) % 6)}>
      {[...'ABCDEF'].map((t, i) => <em key={t} style={{ '--i': i }} data-on={i === n}>{t}</em>)}<i />
    </button>
  );
}
