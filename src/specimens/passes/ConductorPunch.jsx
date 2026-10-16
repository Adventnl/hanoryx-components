import { useState } from 'react';
import c from './passes.module.css';

/* 29 */
export function ConductorPunch() {
  const [done, setDone] = useState(() => new Set([1, 6]));
  const toggle = (i) => setDone((s) => { const n = new Set(s); if (n.has(i)) n.delete(i); else n.add(i); return n; });
  return (
    <div className={c.fig}>
      <div className={c.cp}>
        <span className={c.cpHead}><span className={c.kp}>Day return</span><span className={c.kp}>{done.size}/10 punched</span></span>
        <span className={c.cpGrid}>
          {Array.from({ length: 10 }, (_, i) => (
            <button key={i} type="button" className={c.cpCell} data-s={i % 5} aria-pressed={done.has(i)} aria-label={`Zone ${i + 1}`} onClick={() => toggle(i)}>
              <em>{i + 1}</em><i />
            </button>
          ))}
        </span>
      </div>
    </div>
  );
}
