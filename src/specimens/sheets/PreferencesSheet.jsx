import { useState } from 'react';
import { useToggle } from '../../stage/hooks';
import c from './sheets.module.css';
import { Open, Stage } from './shared';

/* 15 */ export function PreferencesSheet() {
  const [on, set] = useState(false);
  const [a, flipA] = useToggle(true);
  const [b, flipB] = useToggle();
  return <Stage label="Preferences sheet" onEscape={() => set(false)}><Open on={on} set={set}>Prefs</Open><i className={c.scrim} data-on={on} onClick={() => set(false)} /><div className={c.bottom} data-on={on} role="dialog" aria-label="Preferences" inert={!on || undefined}><u /><label><span>Motion</span><input type="checkbox" checked={a} onChange={flipA} /></label><label><span>Sound</span><input type="checkbox" checked={b} onChange={flipB} /></label></div></Stage>;
}
