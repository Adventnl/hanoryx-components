import { useState } from 'react';
import { clamp } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../terminal.module.css";

const HIST = ['git status', 'git add -A', 'git commit -m "ship it"', 'git push origin main', 'npm test'];

/* 03 */ export function HistoryRecall() {
  const [i, setI] = useState(HIST.length);
  const go = (d) => setI((v) => clamp(v + d, 0, HIST.length));
  return (
    <div className={c.win} tabIndex={0} role="group" aria-label="Command history: press the up and down arrow keys"
      onKeyDown={(e) => { if (e.key === 'ArrowUp') { e.preventDefault(); go(-1); } else if (e.key === 'ArrowDown') { e.preventDefault(); go(1); } }}>
      <p className={c.ln}><b className={c.prompt}>$</b> {HIST[i] ?? ''}<i className={c.caret} /></p>
      <div className={c.keys}>
        <button type="button" className={c.key} aria-label="Previous command" onClick={() => go(-1)}><Ico n="up" /></button>
        <button type="button" className={c.key} aria-label="Next command" onClick={() => go(1)}><Ico n="down" /></button>
        <small className={c.dim}>{i >= HIST.length ? 'new line' : `!${i + 1}`}</small>
      </div>
    </div>
  );
}
