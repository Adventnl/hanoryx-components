import { useState } from 'react';
import c from "../sheets.module.css";
import { Open, Stage } from "../shared";

/* 2 */ export function SideDrawer() {
  const [on, set] = useState(false);
  return <Stage label="Right drawer" onEscape={() => set(false)}><Open on={on} set={set} /><i className={c.scrim} data-on={on} onClick={() => set(false)} /><aside className={c.right} data-on={on} aria-label="Right drawer" inert={!on || undefined}><b>Details</b><p>Opens from the edge.</p><button type="button" onClick={() => set(false)}>Close</button></aside></Stage>;
}
