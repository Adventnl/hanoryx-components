import { useState } from 'react';
import c from './docks.module.css';

/* 27 */ export function TextSizeBar() {
  const [s, setS] = useState(1);
  return (
    <div className={c.size}>
      <div role="group" aria-label="Text size bar">
        <button type="button" aria-label="Smaller text" disabled={s <= 0} onClick={() => setS(s - 1)}>A−</button>
        <button type="button" aria-label="Reset text size" onClick={() => setS(1)}>A</button>
        <button type="button" aria-label="Larger text" disabled={s >= 3} onClick={() => setS(s + 1)}>A+</button>
      </div>
      <p style={{ fontSize: `${0.8 + s * 0.2}rem` }}>Sample text at size {s + 1}</p>
    </div>
  );
}
