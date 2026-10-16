import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './terminal.module.css';
import { cx } from './shared';

const CODE = ['import stage from "./stage";', '', 'export function run(el) {', '  const t = stage(el);', '  t.pin(2);', '  return t;', '}'];

/* 29 */ export function LineNumbers() {
  const [cur, setCur] = useState(3);
  return (
    <div className={cx(c.win, c.code)} role="group" aria-label="Code, pick a line"
      onKeyDown={(e) => { if (e.key === 'ArrowDown') { e.preventDefault(); setCur((v) => clamp(v + 1, 0, CODE.length - 1)); } if (e.key === 'ArrowUp') { e.preventDefault(); setCur((v) => clamp(v - 1, 0, CODE.length - 1)); } }}>
      {CODE.map((t, i) => <button key={i} type="button" className={c.cl} data-cur={cur === i} aria-pressed={cur === i} onClick={() => setCur(i)}><span>{i + 1}</span><code>{t || ' '}</code></button>)}
    </div>
  );
}
