import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../steps.module.css";

/* 41 */ export function StarSteps() {
  const [n, setN] = useState(3);
  const [hov, setHov] = useState(0);
  return (
    <div className={c.rate} role="radiogroup" aria-label="Rating" onPointerLeave={() => setHov(0)}>
      {[1, 2, 3, 4, 5].map((k) => <button key={k} type="button" role="radio" aria-checked={k === n} aria-label={`${k} of 5`} data-on={k <= (hov || n)} onPointerEnter={() => setHov(k)} onClick={() => setN(k)}><Ico n="star" /></button>)}
    </div>
  );
}
