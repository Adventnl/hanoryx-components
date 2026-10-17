import { useState } from 'react';
import c from "../sheets.module.css";
import { Open, Stage } from "../shared";

/* 34 */ export function BlurredBackdrop() {
  const [on, set] = useState(false);
  return <Stage label="Blurred backdrop" onEscape={() => set(false)} className={c.busy}><Open on={on} set={set} /><div className={c.blurScrim} data-on={on} onClick={() => set(false)} /><div className={c.modal} data-on={on} role="dialog" aria-label="Blurred backdrop" inert={!on || undefined}><b>Out of focus</b><p>The page behind softens.</p></div></Stage>;
}
