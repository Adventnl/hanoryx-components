import { useState } from 'react';
import c from './stamps.module.css';

/* 08 */ export function CornerPeel() {
  const [on, setOn] = useState(false);
  return (
    <button type="button" className={c.peel} aria-pressed={on} onClick={() => setOn((v) => !v)} aria-label="Peel the corner">
      <span>label</span>
    </button>
  );
}
