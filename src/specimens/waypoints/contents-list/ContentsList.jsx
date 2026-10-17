import { useState } from 'react';
import c from "../waypoints.module.css";
import { DOC } from "../shared";

/* 1 */ export function ContentsList() {
  const [k, setK] = useState(1);
  return (
    <nav className={c.toc} aria-label="Contents">
      <ol>{DOC.map((t, i) => <li key={t}><button type="button" aria-current={i === k ? 'true' : undefined} onClick={() => setK(i)}><span>{String(i + 1).padStart(2, '0')}</span>{t}</button></li>)}</ol>
      <i aria-hidden="true" style={{ '--k': k }} />
    </nav>
  );
}
