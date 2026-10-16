import { useState } from 'react';
import c from './tabs.module.css';

/* 7 */ export function Closable() {
  const start = ['index.js', 'app.css', 'notes.md', 'todo.txt'];
  const [tabs, setTabs] = useState(start);
  const [cur, setCur] = useState(0);
  const close = (name) => setTabs((t) => {
    const next = t.filter((x) => x !== name);
    setCur((v) => Math.min(v, Math.max(0, next.length - 1)));
    return next.length ? next : start;
  });
  return (
    <div className={c.closable} role="tablist" aria-label="Closable tabs">
      {tabs.map((t, k) => (
        <button
          key={t}
          type="button"
          role="tab"
          aria-selected={k === cur}
          aria-keyshortcuts="Delete"
          data-on={k === cur}
          onClick={() => setCur(k)}
          onKeyDown={(e) => { if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); close(t); } }}
        >
          {t}
          <span aria-hidden="true" onClick={(e) => { e.stopPropagation(); close(t); }}>×</span>
        </button>
      ))}
    </div>
  );
}
