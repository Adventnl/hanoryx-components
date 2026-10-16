import { useState } from 'react';
import c from './sheets.module.css';
import { Open, Stage } from './shared';

/* 23 */ export function MenuOverlay() {
  const [on, set] = useState(false);
  return <Stage label="Menu overlay" onEscape={() => set(false)}><Open on={on} set={set}>Menu</Open><nav className={c.menuO} data-on={on} aria-label="Menu overlay" inert={!on || undefined}>{['Index', 'Work', 'Lab', 'Mail'].map((t, k) => <a key={t} href="#mo" style={{ '--k': k }} onClick={(e) => e.preventDefault()}>{t}</a>)}</nav></Stage>;
}
