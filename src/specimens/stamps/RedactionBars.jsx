import { useState } from 'react';
import c from './stamps.module.css';

const RED = ['The budget is', 'forty thousand', 'and the owner is', 'Ms. Okafor'];

/* 34 */ export function RedactionBars() {
  const [open, setOpen] = useState([]);
  const flip = (i) => setOpen((a) => (a.includes(i) ? a.filter((x) => x !== i) : [...a, i]));
  return (
    <div className={c.red}>
      {RED.map((t, i) => <button key={t} type="button" aria-pressed={open.includes(i)} onClick={() => flip(i)} aria-label={`Line ${i + 1}, ${open.includes(i) ? 'revealed' : 'blacked out'}`}>{t}</button>)}
    </div>
  );
}
