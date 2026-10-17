import { useState } from 'react';
import c from "../sheets.module.css";
import { Open, Stage } from "../shared";

/* 4 */ export function CentredModal() {
  const [on, set] = useState(false);
  return <Stage label="Modal" onEscape={() => set(false)}><Open on={on} set={set} /><i className={c.scrim} data-on={on} onClick={() => set(false)} /><div className={c.modal} data-on={on} role="dialog" aria-modal="true" aria-label="Modal" inert={!on || undefined}><b>Heads up</b><p>A centred dialog.</p><button type="button" onClick={() => set(false)}>Okay</button></div></Stage>;
}
