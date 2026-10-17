import { useState } from 'react';
import c from "../kinetic.module.css";

/* 29 */ export function PopIn() {
  const [text, setText] = useState('hello');
  return (
    <div className={c.fig}>
      <input className={c.input} value={text} maxLength={14} aria-label="Type to pop letters in" onChange={(e) => setText(e.target.value)} />
      <p className={c.pop} aria-hidden="true">{[...text].map((ch, i) => <span key={`${i}-${ch}`}>{ch === ' ' ? ' ' : ch}</span>)}</p>
    </div>
  );
}
