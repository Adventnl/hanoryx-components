import { useState } from 'react';
import c from './terminal.module.css';
import { cx } from './shared';

const OPTS = [['-a', 'include hidden entries'], ['-h', 'sizes in human units'], ['-l', 'use a long listing'], ['-r', 'reverse the order']];

/* 13 */ export function ManOptions() {
  const [s, setS] = useState(1);
  return (
    <div className={c.win}>
      <p className={cx(c.ln, c.head)}>LS(1) <span className={c.dim}>— OPTIONS</span></p>
      <div className={c.chips} role="group" aria-label="Options">
        {OPTS.map(([o], i) => <button key={o} type="button" className={c.chip} aria-pressed={s === i} onClick={() => setS(i)} onMouseEnter={() => setS(i)}>{o}</button>)}
      </div>
      <p className={c.ln} aria-live="polite"><b>{OPTS[s][0]}</b> <span className={c.dim}>{OPTS[s][1]}</span></p>
    </div>
  );
}
