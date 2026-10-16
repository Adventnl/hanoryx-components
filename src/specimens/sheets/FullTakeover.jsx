import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './sheets.module.css';
import { Open, Stage } from './shared';

/* 6 */ export function FullTakeover() {
  const [on, set] = useState(false);
  return <Stage label="Full-screen takeover" onEscape={() => set(false)}><Open on={on} set={set} /><div className={c.full} data-on={on} role="dialog" aria-label="Full screen" inert={!on || undefined}><button type="button" aria-label="Close" onClick={() => set(false)}><Ico n="close" /></button><b>Full</b><p>Fills the stage.</p></div></Stage>;
}
