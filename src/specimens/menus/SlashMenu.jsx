import { useState } from 'react';
import c from './menus.module.css';

/* 19 */ export function SlashMenu() {
  const [v, setV] = useState('/');
  const cmds = ['Heading', 'Quote', 'Divider', 'Table'];
  const shown = v.startsWith('/') ? cmds.filter((t) => t.toLowerCase().includes(v.slice(1).toLowerCase())) : [];
  return (
    <div className={c.slash}>
      <input aria-label="Type a slash" value={v} onChange={(e) => setV(e.target.value)} />
      {shown.length > 0 && <ul role="listbox" aria-label="Slash commands">{shown.map((t) => <li key={t} role="option" aria-selected={false} onClick={() => setV(t)}>{t}</li>)}</ul>}
    </div>
  );
}
