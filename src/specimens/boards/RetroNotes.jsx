import { useState } from 'react';
import c from './boards.module.css';
import { Bd, cx } from './shared';

/* 32 */ export function RetroNotes() {
  const [v, setV] = useState([2, 0, 1]);
  const T = [['Went well', 'Fast reviews'], ['To improve', 'Flaky tests'], ['Try next', 'Pair on bugs']];
  return (
    <Bd label="Retro notes" className={c.three}>
      {T.map(([h, n], k) => <div key={h} className={c.lane}><b>{h}</b><button type="button" className={cx(c.cd, c.sticky)} style={{ '--k': k }} aria-label={`${n}, ${v[k]} votes. Vote`} onClick={() => setV((a) => a.map((x, i) => (i === k ? x + 1 : x)))}>{n}<em>+{v[k]}</em></button></div>)}
    </Bd>
  );
}
