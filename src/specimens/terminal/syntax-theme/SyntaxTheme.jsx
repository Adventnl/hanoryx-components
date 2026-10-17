import { useState } from 'react';
import c from "../terminal.module.css";
import { cx } from "../shared";

const SYN = ['night', 'paper', 'neon'];

/* 30 */ export function SyntaxTheme() {
  const [t, setT] = useState(0);
  return (
    <button type="button" className={cx(c.win, c.btn, c.syn)} data-t={SYN[t]} onClick={() => setT((v) => (v + 1) % 3)} aria-label={`Syntax colours: ${SYN[t]}. Click to change`}>
      <span className={c.ln}><i data-k="kw">const</i> <i data-k="fn">add</i> = (<i data-k="id">a</i>, <i data-k="id">b</i>) =&gt; <i data-k="id">a</i> + <i data-k="num">1</i>;</span>
      <span className={c.ln}><i data-k="cm">{'// ' + SYN[t]}</i></span>
      <span className={c.ln}><i data-k="kw">return</i> <i data-k="str">"ok"</i>;</span>
    </button>
  );
}
