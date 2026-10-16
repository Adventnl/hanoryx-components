import { useState } from 'react';
import c from './sheets.module.css';
import { Open, Stage } from './shared';

/* 3 */ export function NavDrawer() {
  const [on, set] = useState(false);
  return <Stage label="Left drawer" onEscape={() => set(false)}><Open on={on} set={set} /><i className={c.scrim} data-on={on} onClick={() => set(false)} /><nav className={c.left} data-on={on} aria-label="Left drawer" inert={!on || undefined}>{['Home', 'Work', 'Notes'].map((t) => <a key={t} href="#left" onClick={(e) => e.preventDefault()}>{t}</a>)}</nav></Stage>;
}
