import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../sheets.module.css";
import { Open, Stage } from "../shared";

/* 16 */ export function ShareSheet() {
  const [on, set] = useState(false);
  return <Stage label="Share sheet" onEscape={() => set(false)}><Open on={on} set={set}>Share</Open><i className={c.scrim} data-on={on} onClick={() => set(false)} /><div className={`${c.bottom} ${c.tall}`} data-on={on} role="dialog" aria-label="Share" inert={!on || undefined}><u /><div className={c.apps}>{[['mail', 'Mail'], ['chat', 'Chat'], ['link', 'Link'], ['copy', 'Copy']].map(([n, t]) => <button key={n} type="button" onClick={() => set(false)}><Ico n={n} /><span>{t}</span></button>)}</div></div></Stage>;
}
