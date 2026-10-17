import { useState } from 'react';
import c from "../sheets.module.css";
import { Open, Stage } from "../shared";

/* 24 */ export function FiltersSheet() {
  const [on, set] = useState(false);
  const [sel, setSel] = useState(['New']);
  const flip = (t) => setSel((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]));
  return <Stage label="Filters sheet" onEscape={() => set(false)}><Open on={on} set={set}>Filters</Open><i className={c.scrim} data-on={on} onClick={() => set(false)} /><div className={`${c.bottom} ${c.tall}`} data-on={on} role="dialog" aria-label="Filters" inert={!on || undefined}><u /><div className={c.chips}>{['New', 'Sale', 'Local', 'Used'].map((t) => <button key={t} type="button" aria-pressed={sel.includes(t)} onClick={() => flip(t)}>{t}</button>)}</div><button type="button" className={c.apply} onClick={() => set(false)}>Show {sel.length * 12} results</button></div></Stage>;
}
