import { useState } from 'react';
import c from "../keypads.module.css";

/* 26 */ export function StyleGroup() {
  const [on, setOn] = useState([true, false, false]);
  return (
    <div className={c.group} role="group" aria-label="Text style">
      {['B', 'I', 'U'].map((t, i) => <button type="button" key={t} aria-label={['Bold', 'Italic', 'Underline'][i]} aria-pressed={on[i]} data-t={t} onClick={() => setOn(on.map((x, j) => (j === i ? !x : x)))}>{t}</button>)}
    </div>
  );
}
