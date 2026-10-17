import { useState } from 'react';
import c from "../terminal.module.css";
import { cx } from "../shared";

const PICK = ['lint', 'types', 'tests', 'docs'];

/* 39 */ export function CheckboxList() {
  const [on, setOn] = useState(['lint', 'tests']);
  const flip = (k) => setOn((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]));
  return (
    <div className={c.win}>
      {PICK.map((k) => <button key={k} type="button" role="checkbox" aria-checked={on.includes(k)} className={cx(c.ln, c.bl)} onClick={() => flip(k)}><b className={on.includes(k) ? c.ok : c.dim}>{on.includes(k) ? '◉' : '◯'}</b> {k}</button>)}
      <small className={c.dim}>{on.length} of 4 selected</small>
    </div>
  );
}
