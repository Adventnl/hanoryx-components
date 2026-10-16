import { useState } from 'react';
import c from './stamps.module.css';

/* 03 */ export function PressedSeal() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={c.press} onClick={() => setN((v) => v + 1)} aria-label="Press the seal">
      <i key={n} className={c.wax}><b>H</b></i>
    </button>
  );
}
