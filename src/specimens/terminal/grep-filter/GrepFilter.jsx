import { useState } from 'react';
import c from "../terminal.module.css";

const GREP = ['src/app.jsx:12: const stage = pin();', 'src/nav.jsx:4: import { stage } from ./s', 'docs/api.md:30: stage options', 'src/ui.css:9: .stage { gap: 1rem }', 'README.md:2: run the stage demo'];

/* 31 */ export function GrepFilter() {
  const [q, setQ] = useState('stage');
  const hit = GREP.filter((l) => !q || l.toLowerCase().includes(q.toLowerCase()));
  const mark = (l) => {
    if (!q) return l;
    const i = l.toLowerCase().indexOf(q.toLowerCase());
    return i < 0 ? l : <>{l.slice(0, i)}<mark>{l.slice(i, i + q.length)}</mark>{l.slice(i + q.length)}</>;
  };
  return (
    <div className={c.win}>
      <label className={c.ln}><b className={c.prompt}>grep</b> <input className={c.plain} value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search text" spellCheck={false} autoComplete="off" /></label>
      <div className={c.scroll}>{hit.map((l) => <p key={l} className={c.ln}>{mark(l)}</p>)}<small className={c.dim}>{hit.length} matches</small></div>
    </div>
  );
}
