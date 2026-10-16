import { useState } from 'react';
import c from './tabs.module.css';

/* 33 */ export function LetterRolodex() {
  const letters = 'ABCDEFGHIJKLM'.split('');
  const [at, setAt] = useState(-1);
  return (
    <div className={c.rolodex} role="tablist" aria-label="Letter index" onPointerLeave={() => setAt(-1)}>
      {letters.map((l, i) => <button key={l} type="button" role="tab" aria-selected={at === i} style={{ '--d': at < 0 ? 9 : Math.abs(i - at) }} onPointerEnter={() => setAt(i)} onFocus={() => setAt(i)}>{l}</button>)}
    </div>
  );
}
