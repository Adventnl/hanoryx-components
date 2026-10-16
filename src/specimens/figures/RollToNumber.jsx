import { useState } from 'react';
import c from './figures.module.css';
import { strip } from './shared';

/* 15 */ const ROLL = ['48210', '00007', '93605', '12345', '60606'];

export function RollToNumber() {
  const [k, setK] = useState(0);
  return (
    <button type="button" className={c.rollBtn} aria-label={`Rolling number ${ROLL[k]}. Click for another`} onClick={() => setK((k + 1) % ROLL.length)}>
      {[...ROLL[k]].map((d, i) => (
        <span key={i} style={{ '--i': i }}><b style={{ '--d': d }}>{strip(10).map((x, j) => <i key={j}>{x}</i>)}</b></span>
      ))}
    </button>
  );
}
