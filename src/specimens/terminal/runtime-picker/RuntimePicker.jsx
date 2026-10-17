import { useState } from 'react';
import c from "../terminal.module.css";
import { cx } from "../shared";

const RUN = ['node 22', 'bun 1.2', 'deno 2', 'edge worker'];

/* 38 */ export function RuntimePicker() {
  const [i, setI] = useState(0);
  return (
    <div className={c.win} tabIndex={0} role="listbox" aria-label="Pick a runtime" aria-activedescendant={`rt${i}`}
      onKeyDown={(e) => { if (e.key === 'ArrowDown') { e.preventDefault(); setI((v) => (v + 1) % 4); } if (e.key === 'ArrowUp') { e.preventDefault(); setI((v) => (v + 3) % 4); } }}>
      <p className={c.ln}><b className={c.prompt}>?</b> Pick a runtime</p>
      {RUN.map((r, k) => <p key={r} id={`rt${k}`} role="option" aria-selected={i === k} className={cx(c.ln, c.opt)} onClick={() => setI(k)}><span>{i === k ? '❯' : ' '}</span> {r}</p>)}
    </div>
  );
}
