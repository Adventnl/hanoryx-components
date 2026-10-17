import { useState } from 'react';
import c from "../sheets.module.css";
import { Open, Stage } from "../shared";

/* 18 */ export function FormModal() {
  const [on, set] = useState(false);
  return <Stage label="Form modal" onEscape={() => set(false)}><Open on={on} set={set}>New</Open><i className={c.scrim} data-on={on} onClick={() => set(false)} /><form className={c.modal} data-on={on} role="dialog" aria-modal="true" aria-label="New item" inert={!on || undefined} onSubmit={(e) => { e.preventDefault(); set(false); }}><label>Name<input /></label><button type="submit">Create</button></form></Stage>;
}
