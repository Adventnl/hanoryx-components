import { useState } from 'react';
import c from './fold.module.css';

export function AdventDoors() {
  const [open, setOpen] = useState(() => new Set([1]));
  const toggle = (i) => setOpen((s) => { const n = new Set(s); if (n.has(i)) n.delete(i); else n.add(i); return n; });
  return (
    <div className={c.fig}>
      <div className={c.advent}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <button key={n} type="button" aria-pressed={open.has(n)} aria-label={`Door ${n}`} onClick={() => toggle(n)}>
            <i className={c.inside}>•</i>
            <i className={c.door} data-open={open.has(n)}>{n}</i>
          </button>
        ))}
      </div>
    </div>
  );
}
