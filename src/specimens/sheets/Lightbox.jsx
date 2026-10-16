import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './sheets.module.css';
import { Stage } from './shared';

/* 14 */ export function Lightbox() {
  const [on, set] = useState(false);
  return <Stage label="Lightbox" onEscape={() => set(false)}><button type="button" className={c.thumb} aria-label="Open picture" onClick={() => set(true)} /><div className={c.light} data-on={on} role="dialog" aria-label="Picture" inert={!on || undefined} onClick={() => set(false)}><div /><button type="button" aria-label="Close picture" onClick={() => set(false)}><Ico n="close" /></button></div></Stage>;
}
