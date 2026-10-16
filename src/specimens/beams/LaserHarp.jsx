import { useState } from 'react';
import c from './beams.module.css';
import { cx } from './shared';

/* 34 */ export function LaserHarp() {
  const [on, setOn] = useState([0, 2, 3]);
  const flip = (i) => setOn((a) => (a.includes(i) ? a.filter((x) => x !== i) : [...a, i]));
  return (
    <div className={cx(c.sw, c.harp)} role="group" aria-label="Laser harp">
      {[0, 1, 2, 3, 4].map((i) => <button key={i} type="button" aria-pressed={on.includes(i)} aria-label={`String ${i + 1}`} onClick={() => flip(i)} style={{ '--h': 130 + i * 38 }}><i /></button>)}
    </div>
  );
}
