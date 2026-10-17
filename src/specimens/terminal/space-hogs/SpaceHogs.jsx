import { useState } from 'react';
import c from "../terminal.module.css";
import { cx } from "../shared";

const DU = [['node_modules', 612], ['.git', 140], ['dist', 56], ['src', 22], ['public', 9]];

/* 23 */ export function SpaceHogs() {
  const [s, setS] = useState(0);
  return (
    <div className={c.win}>
      {DU.map(([d, mb], i) => (
        <button key={d} type="button" className={cx(c.ln, c.du)} aria-pressed={s === i} onClick={() => setS(i)}>
          <span className={c.meter}><i style={{ width: `${(mb / 612) * 100}%` }} /></span><span>{mb}M</span><span className={c.dim}>{d}</span>
        </button>
      ))}
    </div>
  );
}
