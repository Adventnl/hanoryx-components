import { useState } from 'react';
import c from "../terminal.module.css";

const EXIT = [[0, 'success'], [1, 'general error'], [2, 'misuse of a command'], [126, 'not executable'], [127, 'command not found'], [130, 'stopped with Ctrl-C']];

/* 14 */ export function ExitCodes() {
  const [s, setS] = useState(4);
  const [code, why] = EXIT[s];
  return (
    <div className={c.win}>
      <div className={c.chips} role="group" aria-label="Exit codes">
        {EXIT.map(([n], i) => <button key={n} type="button" className={c.chip} aria-pressed={s === i} onClick={() => setS(i)}>{n}</button>)}
      </div>
      <p className={c.ln}><b className={code ? c.err : c.ok}>{code ? '✘' : '✔'}</b> exit {code} <span className={c.dim}>· {why}</span></p>
    </div>
  );
}
