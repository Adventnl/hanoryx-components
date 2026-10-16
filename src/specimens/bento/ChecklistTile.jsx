import { useState } from 'react';
import c from './bento.module.css';
import { Tile } from './shared';

const TODO = ['Wind the belt', 'Open the gates', 'Serve the tea'];

export function ChecklistTile() {
  const [done, setDone] = useState(() => new Set([0]));
  const toggle = (i) => setDone((s) => { const n = new Set(s); if (n.has(i)) n.delete(i); else n.add(i); return n; });
  return (
    <div className={c.fig}>
      <Tile k={`Tasks · ${done.size}/3`}>
        <ul className={c.tasks}>
          {TODO.map((t, i) => <li key={t}><button type="button" role="checkbox" aria-checked={done.has(i)} onClick={() => toggle(i)}><i /><span>{t}</span></button></li>)}
        </ul>
      </Tile>
    </div>
  );
}
