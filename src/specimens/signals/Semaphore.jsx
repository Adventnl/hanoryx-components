import { useState } from 'react';
import c from './signals.module.css';

/* 31 */ export function Semaphore() {
  const [k, setK] = useState(0);
  const pos = [[0, 0], [45, 90], [90, 135], [135, 45]];
  return (
    <div className={c.sema}>
      <div aria-hidden="true"><i style={{ '--a': pos[k][0] }} /><i style={{ '--a': -pos[k][1] }} /><b /></div>
      <button type="button" onClick={() => setK((k + 1) % 4)}>Next signal</button>
    </div>
  );
}
