import { useState } from 'react';
import c from "../stamps.module.css";

const INIT = ['HX', 'A', 'KO', 'M'];

/* 40 */ export function MonogramSeal() {
  const [i, setI] = useState(0);
  return (
    <button type="button" className={c.mono} onClick={() => setI((v) => (v + 1) % 4)} aria-label={`Monogram ${INIT[i]}. Click to change`}>
      <span>{INIT[i]}</span>
    </button>
  );
}
