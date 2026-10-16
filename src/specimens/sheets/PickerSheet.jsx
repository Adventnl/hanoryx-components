import { useState } from 'react';
import c from './sheets.module.css';
import { Open, Stage } from './shared';

/* 19 */ export function PickerSheet() {
  const [on, set] = useState(false);
  const [k, setK] = useState(1);
  return <Stage label="Picker sheet" onEscape={() => set(false)}><Open on={on} set={set}>Pick</Open><i className={c.scrim} data-on={on} onClick={() => set(false)} /><div className={`${c.bottom} ${c.tall}`} data-on={on} role="dialog" aria-label="Pick an image" inert={!on || undefined}><u /><div className={c.pick} role="radiogroup" aria-label="Images">{[0, 1, 2, 3].map((i) => <button key={i} type="button" role="radio" aria-checked={i === k} aria-label={`Image ${i + 1}`} style={{ '--h': i * 70 }} onClick={() => { setK(i); set(false); }} />)}</div></div></Stage>;
}
