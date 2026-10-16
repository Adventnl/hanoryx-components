import { useState } from 'react';
import c from './terminal.module.css';

/* 27 */ export function WindowStrip() {
  const [s, setS] = useState(0);
  const W = [['zsh', 'ada@hanoryx ~ $'], ['vim', '-- INSERT --'], ['logs', 'tail -f app.log']];
  return (
    <div className={c.win}>
      <div className={c.tabs} role="tablist" aria-label="Windows">
        {W.map(([n], i) => <button key={n} type="button" role="tab" id={`w${i}`} aria-selected={s === i} className={c.tab} onClick={() => setS(i)}>{i}:{n}{s === i ? '*' : ''}</button>)}
      </div>
      <p className={c.ln} role="tabpanel" aria-labelledby={`w${s}`}>{W[s][1]}<i className={c.caret} /></p>
    </div>
  );
}
