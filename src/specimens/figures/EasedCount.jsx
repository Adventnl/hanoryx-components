import { useState } from 'react';
import c from './figures.module.css';

/* 3 */ const COUNT_TARGETS = [8421, 120, 99999, 0, 4096];

export function EasedCount() {
  const [k, setK] = useState(0);
  return (
    <button type="button" className={c.countBtn} style={{ '--cv': COUNT_TARGETS[k] }} aria-label="Eased count, click for another number" onClick={() => setK((k + 1) % COUNT_TARGETS.length)}>
      <b className={c.cv} />
      <i><u /></i>
    </button>
  );
}
