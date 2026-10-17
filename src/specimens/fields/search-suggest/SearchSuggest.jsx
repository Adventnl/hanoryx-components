import { useState } from 'react';
import c from "../fields.module.css";

/* 9 */ export function SearchSuggest() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const list = ['recent: grid layouts', 'recent: spring easing', 'recent: focus rings', 'recent: skeletons'].filter((s) => s.includes(q.toLowerCase()));
  return (
    <div className={c.suggest} onFocus={() => setOpen(true)} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}>
      <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="5.5" /><path d="m13 13 5 5" /></svg>
      <input value={q} placeholder="Search" aria-label="Search" onChange={(e) => setQ(e.target.value)} />
      {open && <ul>{list.map((s) => <li key={s}><button type="button" onClick={() => { setQ(s.replace('recent: ', '')); setOpen(false); }}>{s}</button></li>)}</ul>}
    </div>
  );
}
