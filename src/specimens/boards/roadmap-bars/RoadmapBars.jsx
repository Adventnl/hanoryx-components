import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 29 */ export function RoadmapBars() {
  const [shipped, setShipped] = useState([0]);
  const R = [['Auth', 0, 2], ['Search', 1, 3], ['Billing', 2, 4], ['API', 3, 4]];
  return (
    <Bd label="Roadmap" className={c.road}>
      <div className={c.qs}>{['Q1', 'Q2', 'Q3', 'Q4'].map((q) => <small key={q}>{q}</small>)}</div>
      {R.map(([t, a, b], k) => <button key={t} type="button" aria-pressed={shipped.includes(k)} style={{ '--a': a, '--n': b - a }} onClick={() => setShipped((x) => (x.includes(k) ? x.filter((y) => y !== k) : [...x, k]))}>{t}{shipped.includes(k) ? ' ✓' : ''}</button>)}
    </Bd>
  );
}
