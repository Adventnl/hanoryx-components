import { useState } from 'react';
import c from "../terminal.module.css";

const CMDS = ['git checkout', 'git commit', 'git clone', 'grep', 'gzip', 'npm install', 'npm run dev', 'node'];

/* 04 */ export function TabComplete() {
  const [v, setV] = useState('git c');
  const ghost = v ? (CMDS.find((m) => m.startsWith(v) && m !== v) ?? '') : '';
  const done = () => { if (ghost) setV(ghost); };
  return (
    <div className={c.win}>
      <div className={c.ln}>
        <b className={c.prompt}>$</b>
        <span className={c.ghostBox}>
          <i>{v}</i><u>{ghost.slice(v.length)}</u>
          <input value={v} onChange={(e) => setV(e.target.value)} spellCheck={false} autoComplete="off" aria-label="Command: press Tab to complete"
            onKeyDown={(e) => { if (e.key === 'Tab' && ghost) { e.preventDefault(); done(); } }} />
        </span>
      </div>
      <button type="button" className={c.key} onClick={done} disabled={!ghost}>Tab ⇥</button>
    </div>
  );
}
