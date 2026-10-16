import { useState } from 'react';
import { pad2 } from '../../stage/hooks';
import c from './stamps.module.css';

const FLAGS = ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#a855f7'];

/* 42 */ export function MarginFlags() {
  const [on, setOn] = useState([0, 3]);
  const flip = (i) => setOn((a) => (a.includes(i) ? a.filter((x) => x !== i) : [...a, i]));
  return (
    <div className={c.flags}>
      <span className={c.page}><i /><i /><i /><i /><small>p. {pad2(14 + on.length)}</small></span>
      <div role="group" aria-label="Page flags">
        {FLAGS.map((col, i) => <button key={col} type="button" aria-pressed={on.includes(i)} aria-label={`Flag ${i + 1}`} style={{ '--f': col }} onClick={() => flip(i)} />)}
      </div>
    </div>
  );
}
