import { useState } from 'react';
import c from "../menus.module.css";

/* 21 */ export function QuickDates() {
  const [v, setV] = useState('Today');
  return (
    <div className={c.quick} role="radiogroup" aria-label="When">
      {['Today', 'Tomorrow', 'Next week', 'Pick a date…'].map((t) => <button key={t} type="button" role="radio" aria-checked={v === t} onClick={() => setV(t)}>{t}</button>)}
    </div>
  );
}
