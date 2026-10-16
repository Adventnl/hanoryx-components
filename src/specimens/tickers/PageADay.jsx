import { useState } from 'react';
import { pad2 } from '../../stage/hooks';
import c from './tickers.module.css';
import { Cell } from './shared';

const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const dayOf = (n) => ({ date: pad2(((n - 1) % 30) + 1), wk: DAYS[(n + 1) % 7] });

export function PageADay() {
  const [s, setS] = useState({ n: 14, prev: 14, k: 0 });
  const now = dayOf(s.n);
  const was = dayOf(s.prev);
  return (
    <button
      type="button"
      className={`${c.fig} ${c.reset}`}
      aria-label={`Calendar page, ${now.wk.toLowerCase()} ${Number(now.date)} October. Turn the page`}
      onClick={() => setS((v) => ({ n: v.n + 1, prev: v.n, k: v.k + 1 }))}
    >
      <span className={c.leaf}>
        <span className={c.leafHead}>OCTOBER</span>
        <span className={c.row} style={{ '--fs': '10cqw' }}>
          <Cell key={`w${s.k}`} cur={now.wk} prev={was.wk} />
          <Cell key={`d${s.k}`} cur={now.date} prev={was.date} i={2} />
        </span>
      </span>
    </button>
  );
}
