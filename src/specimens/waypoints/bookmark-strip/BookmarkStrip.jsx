import { useState } from 'react';
import c from "../waypoints.module.css";

/* 29 */ export function BookmarkStrip() {
  const [marks, setMarks] = useState([3, 11]);
  const flip = (k) => setMarks((m) => (m.includes(k) ? m.filter((x) => x !== k) : [...m, k]));
  return (
    <div className={c.books}>
      <ol>{Array.from({ length: 14 }, (_, k) => <li key={k}><button type="button" aria-pressed={marks.includes(k)} aria-label={`Page ${k + 1}`} onClick={() => flip(k)}><i /></button></li>)}</ol>
      <output>{marks.length} saved</output>
    </div>
  );
}
