import { useState } from 'react';
import c from './editorial.module.css';

const MARKS = [['“', '”', 'curly'], ['"', '"', 'straight'], ['«', '»', 'guillemets'], ['‘', '’', 'single'], ['‹', '›', 'angle']];

export function QuoteMarks() {
  const [k, setK] = useState(0);
  const [a, b, name] = MARKS[k];
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`Quotation marks: ${name}. Try the next style`} onClick={() => setK((x) => (x + 1) % MARKS.length)}>
      <span className={c.marks}>{a}Quiet{b}</span>
      <span className={c.note}>{name}</span>
    </button>
  );
}
