import { useState } from 'react';
import c from "../sheets.module.css";
import { Open, Stage } from "../shared";

/* 13 */ export function CommandModal() {
  const [on, set] = useState(false);
  return <Stage label="Command palette" onEscape={() => set(false)}><Open on={on} set={set} /><i className={c.scrim} data-on={on} onClick={() => set(false)} /><div className={c.pal} data-on={on} role="dialog" aria-label="Command palette" inert={!on || undefined}><input aria-label="Command" placeholder="Type a command" /><ul>{['New file', 'Open…', 'Toggle theme'].map((t) => <li key={t}>{t}</li>)}</ul></div></Stage>;
}
