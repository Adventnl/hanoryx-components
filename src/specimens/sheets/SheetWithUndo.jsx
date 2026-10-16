import { useState } from 'react';
import c from './sheets.module.css';
import { Open, Stage } from './shared';

/* 41 */ export function SheetWithUndo() {
  const [on, set] = useState(false);
  return <Stage label="Sheet with undo" onEscape={() => set(false)}><Open on={on} set={set}>Archive</Open><div className={c.undoBar} data-on={on} role="status"><span>Archived</span><button type="button" onClick={() => set(false)}>Undo</button></div></Stage>;
}
