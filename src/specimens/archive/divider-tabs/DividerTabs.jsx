import { useState } from 'react';
import c from "../archive.module.css";

/* 13 */ export function DividerTabs() {
  const [s, setS] = useState(0);
  const T = ['Intro', 'Terms', 'Scope', 'Fees'];
  return (
    <div className={c.divs}>
      <div role="group" aria-label="Dividers">
        {T.map((t, i) => <button key={t} type="button" aria-pressed={s === i} style={{ '--i': i }} onClick={() => setS(i)}>{t}</button>)}
      </div>
      <p aria-live="polite">{T[s]} · section {s + 1} of 4</p>
    </div>
  );
}
