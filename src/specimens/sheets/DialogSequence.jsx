import { useState } from 'react';
import c from './sheets.module.css';
import { Open, Stage } from './shared';

/* 39 */ export function DialogSequence() {
  const [i, setI] = useState(-1);
  return <Stage label="Dialog sequence" onEscape={() => setI(-1)}><Open on={i >= 0} set={(v) => setI(v ? 0 : -1)}>Begin</Open><i className={c.scrim} data-on={i >= 0} /><div className={c.modal} data-on={i >= 0} role="dialog" aria-modal="true" aria-label="Steps" inert={i < 0 || undefined}><ol>{[0, 1, 2].map((k) => <li key={k} data-on={k <= i} />)}</ol><p>Step {Math.max(i, 0) + 1} of 3</p><span><button type="button" disabled={i <= 0} onClick={() => setI(i - 1)}>Back</button><button type="button" onClick={() => setI(i >= 2 ? -1 : i + 1)}>{i >= 2 ? 'Finish' : 'Next'}</button></span></div></Stage>;
}
