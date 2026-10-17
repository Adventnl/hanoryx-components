import { useState } from 'react';
import c from "../signals.module.css";

/* 40 */ export function AlertLevels() {
  const [k, setK] = useState(3);
  return (
    <div className={c.defcon} role="radiogroup" aria-label="Alert level">
      {[5, 4, 3, 2, 1].map((n) => <button key={n} type="button" role="radio" aria-checked={n === k} data-n={n} onClick={() => setK(n)}>{n}</button>)}
    </div>
  );
}
