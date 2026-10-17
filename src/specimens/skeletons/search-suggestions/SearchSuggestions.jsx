import { useState } from 'react';
import c from "../skeletons.module.css";

/* 25 */ export function SearchSuggestions() {
  const [q, setQ] = useState('');
  const hits = ['maps', 'markers', 'marginalia'].filter((t) => q && t.startsWith(q.toLowerCase()));
  return (
    <div className={c.suggest}>
      <input aria-label="Search" placeholder="Try ‘ma’" value={q} onChange={(e) => setQ(e.target.value)} />
      {q === '' ? <p>Type to search.</p> : hits.length ? <ul>{hits.map((t) => <li key={t}>{t}</li>)}</ul> : <p>No match. Try fewer letters.</p>}
    </div>
  );
}
