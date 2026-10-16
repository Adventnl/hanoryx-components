import { useState } from 'react';
import c from './terminal.module.css';
import { cx } from './shared';

const BLAME = [['a41f', 'ada', 'const open = false;'], ['a41f', 'ada', 'const speed = 180;'], ['7e12', 'lin', 'render(open);'], ['c09d', 'ada', 'pin(2);'], ['7e12', 'lin', 'export default stage;']];

/* 19 */ export function BlameGutter() {
  const [h, setH] = useState('');
  return (
    <div className={c.win} onMouseLeave={() => setH('')}>
      {BLAME.map(([hash, who, code], i) => (
        <button key={i} type="button" className={cx(c.ln, c.bl)} data-hot={h === hash} onMouseEnter={() => setH(hash)} onFocus={() => setH(hash)} onBlur={() => setH('')}>
          <span className={c.hashc}>{hash}</span><span className={c.dim}>{who}</span><span>{code}</span>
        </button>
      ))}
    </div>
  );
}
