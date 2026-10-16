import { useState } from 'react';
import c from './sheets.module.css';
import { Open, Stage } from './shared';

/* 1 */ export function BottomSheet() {
  const [on, set] = useState(false);
  return <Stage label="Bottom sheet" onEscape={() => set(false)}><Open on={on} set={set} /><i className={c.scrim} data-on={on} onClick={() => set(false)} /><div className={c.bottom} data-on={on} role="dialog" aria-label="Bottom sheet" inert={!on || undefined}><u /><b>Choose a size</b><p>Small, medium or large.</p></div></Stage>;
}
