import { useState } from 'react';
import c from './feeds.module.css';
import { Fd } from './shared';

/* 40 */ export function PollResults() {
  const v = [4, 7, 2];
  const [mine, setMine] = useState(-1);
  const tot = v.reduce((a, b) => a + b, 0) + (mine >= 0 ? 1 : 0);
  return (
    <Fd label="Poll" className={c.list}>
      <b className={c.hd}>Lunch spot?</b>
      {['Noodles', 'Tacos', 'Salad'].map((t, k) => { const n = v[k] + (mine === k ? 1 : 0); return <button key={t} type="button" className={c.pollRow} aria-pressed={mine === k} onClick={() => { if (mine < 0) setMine(k); else setMine(-1); }}><i style={{ width: `${(n / tot) * 100}%` }} /><span>{t}</span><small>{Math.round((n / tot) * 100)}%</small></button>; })}
    </Fd>
  );
}
