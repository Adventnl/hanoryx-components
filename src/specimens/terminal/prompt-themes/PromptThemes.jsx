import { useState } from 'react';
import c from "../terminal.module.css";
import { cx } from "../shared";

/* 16 */ export function PromptThemes() {
  const [t, setT] = useState(0);
  const themes = ['plain', 'powerline', 'minimal', 'arrow'];
  return (
    <button type="button" className={cx(c.win, c.btn)} onClick={() => setT((v) => (v + 1) % 4)} aria-label={`Prompt theme: ${themes[t]}. Click to change`}>
      <span className={cx(c.ln, c.theme)} data-t={themes[t]}>
        <span>~/work</span><span>main ±2</span><span>✔</span><i />
      </span>
      <small className={c.dim}>{themes[t]}</small>
    </button>
  );
}
