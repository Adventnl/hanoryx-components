import { useState } from 'react';
import c from "../terminal.module.css";

const ALIAS = { gs: 'git status', gp: 'git push', ll: 'ls -alh', dc: 'docker compose up' };

/* 34 */ export function AliasExpand() {
  const [v, setV] = useState('gs');
  const change = (e) => {
    const t = e.target.value;
    const m = /^(\w+) $/.exec(t);
    setV(m && ALIAS[m[1]] ? `${ALIAS[m[1]]} ` : t);
  };
  return (
    <div className={c.win}>
      <label className={c.ln}><b className={c.prompt}>$</b> <input className={c.plain} value={v} onChange={change} aria-label="Command: type an alias then a space" spellCheck={false} autoComplete="off" /></label>
      <small className={c.dim}>gs · gp · ll · dc, then space</small>
    </div>
  );
}
