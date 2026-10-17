import { useState } from 'react';
import c from "../markup.module.css";

const TYPOS = [['Teh', 'The'], ['moveing', 'moving']];

export function TypoSquiggle() {
  const [fixed, setFixed] = useState([false, false]);
  const left = fixed.filter((f) => !f).length;
  return (
    <div className={c.fig}>
      <p className={c.para}>
        <button type="button" className={c.typo} data-fixed={fixed[0]} onClick={() => setFixed((f) => [true, f[1]])}>{fixed[0] ? TYPOS[0][1] : TYPOS[0][0]}</button> belt keeps{' '}
        <button type="button" className={c.typo} data-fixed={fixed[1]} onClick={() => setFixed((f) => [f[0], true])}>{fixed[1] ? TYPOS[1][1] : TYPOS[1][0]}</button> all night.
      </p>
      <div className={c.chipsRow}>
        <span className={c.note}>{left ? `${left} possible ${left === 1 ? 'issue' : 'issues'}` : 'No issues'}</span>
        <button type="button" className={c.mini} onClick={() => setFixed([false, false])}>reset</button>
      </div>
    </div>
  );
}
