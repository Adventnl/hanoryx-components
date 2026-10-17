import { useState } from 'react';
import c from "../editorial.module.css";

export function ReadingTime() {
  const [text, setText] = useState('The belt keeps moving, though nobody asked it to.');
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const mins = Math.max(0, words / 200);
  return (
    <div className={c.fig}>
      <textarea className={c.area} value={text} onChange={(e) => setText(e.target.value)} rows={3} aria-label="Text to time" spellCheck="false" />
      <p className={c.note}>{words} words · {mins < 1 ? 'under a minute' : `${Math.ceil(mins)} min`} to read</p>
    </div>
  );
}
