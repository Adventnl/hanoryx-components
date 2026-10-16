import { useState } from 'react';
import c from './fold.module.css';

const SQUARES = ['Square', 'Triangle', 'Small triangle', 'Kite'];

export function PaperSteps() {
  const [k, setK] = useState(0);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`Paper fold step ${k + 1}: ${SQUARES[k]}. Fold again`} onClick={() => setK((x) => (x + 1) % SQUARES.length)}>
      <span className={c.steps}><i data-k={k} /><u /></span>
      <span className={c.cap}>{k + 1} / 4 · {SQUARES[k]}</span>
    </button>
  );
}
