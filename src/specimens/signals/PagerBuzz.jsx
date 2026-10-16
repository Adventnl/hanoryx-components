import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './signals.module.css';

/* 42 */ export function PagerBuzz() {
  const [n, setN] = useState(0);
  return (
    <div className={c.buzz}>
      <span key={n} data-fire={n > 0} role="img" aria-label="Pager">
        <Ico n="bell" />
      </span>
      <button type="button" onClick={() => setN(n + 1)}>Page me</button>
    </div>
  );
}
