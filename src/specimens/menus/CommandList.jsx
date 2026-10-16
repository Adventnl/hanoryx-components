import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './menus.module.css';

/* 5 */ export function CommandList() {
  const all = ['Open file', 'Open folder', 'Open settings', 'Run task', 'Run tests', 'Toggle theme'];
  const [q, setQ] = useState('');
  const [k, setK] = useState(0);
  const shown = all.filter((t) => t.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className={c.cmd}>
      <input aria-label="Filter commands" placeholder="Type a command" value={q} onChange={(e) => { setQ(e.target.value); setK(0); }} onKeyDown={(e) => { if (e.key === 'ArrowDown') { e.preventDefault(); setK((v) => clamp(v + 1, 0, Math.max(0, shown.length - 1))); } if (e.key === 'ArrowUp') { e.preventDefault(); setK((v) => clamp(v - 1, 0, Math.max(0, shown.length - 1))); } }} />
      <ul role="listbox" aria-label="Commands">{shown.length ? shown.map((t, i) => <li key={t} role="option" aria-selected={i === k} onClick={() => setK(i)}>{t}</li>) : <li className={c.none}>No match</li>}</ul>
    </div>
  );
}
