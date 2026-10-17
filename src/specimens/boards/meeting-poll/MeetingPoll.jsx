import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 42 */ export function MeetingPoll() {
  const [v, setV] = useState(() => [[1, 0, 1], [0, 1, 1], [1, 1, 1], [0, 0, 1]]);
  const sums = v.map((r) => r.reduce((a, b) => a + b, 0));
  const best = sums.indexOf(Math.max(...sums));
  return (
    <Bd label="Meeting poll" className={c.poll}>
      <div className={c.pollH}><span /><small>Ana</small><small>Kofi</small><small>Mara</small></div>
      {['Mon 10', 'Tue 14', 'Wed 9', 'Thu 16'].map((t, r) => <div key={t} data-best={best === r}><small>{t}</small>{v[r].map((x, k) => <button key={k} type="button" aria-pressed={!!x} aria-label={`${t}, person ${k + 1}`} onClick={() => setV((a) => a.map((row, i) => (i === r ? row.map((y, j) => (j === k ? (y ? 0 : 1) : y)) : row)))}>{x ? '✓' : ''}</button>)}</div>)}
    </Bd>
  );
}
