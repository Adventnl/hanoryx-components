import { useState } from 'react';
import { pad2 } from "../../../stage/hooks";
import c from "../tickers.module.css";
import { Cell } from "../shared";

const SIDES = ['HOME', 'AWAY'];

export function ScoreTicker() {
  const [sc, setSc] = useState([{ cur: 2, prev: 2, k: 0 }, { cur: 1, prev: 1, k: 0 }]);
  const bump = (t) => setSc((s) => s.map((x, i) => (i === t ? { cur: (x.cur + 1) % 100, prev: x.cur, k: x.k + 1 } : x)));
  return (
    <div className={c.fig}>
      <div className={c.score}>
        {SIDES.map((name, i) => {
          const s = sc[i];
          const now = pad2(s.cur);
          const was = pad2(s.prev);
          return (
            <button key={name} type="button" className={`${c.team} ${c.reset}`} onClick={() => bump(i)} aria-label={`${name.toLowerCase()} score ${s.cur}, add one`}>
              <span className={c.teamName}>{name}</span>
              <span className={c.row} style={{ '--fs': '9cqw' }}>
                {[...now].map((d, j) => <Cell key={`${s.k}-${j}`} cur={d} prev={was[j]} i={j} />)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
