import { useState } from 'react';
import c from './waypoints.module.css';

/* 16 */ export function NumberedSections() {
  const [open, setOpen] = useState(1);
  const secs = [['Basics', ['Install', 'Run']], ['Guides', ['Theming', 'Routing']], ['Reference', ['API']]];
  return (
    <ol className={c.nsec} aria-label="Numbered sections">
      {secs.map(([t, kids], i) => (
        <li key={t}>
          <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}><b>{i + 1}</b>{t}</button>
          {open === i && <ol>{kids.map((k, j) => <li key={k}>{i + 1}.{j + 1} {k}</li>)}</ol>}
        </li>
      ))}
    </ol>
  );
}
