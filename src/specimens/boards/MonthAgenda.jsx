import { useState } from 'react';
import c from './boards.module.css';
import { Bd } from './shared';

/* 27 */ export function MonthAgenda() {
  const [d, setD] = useState(2);
  const E = [['Standup', 'Review'], ['Planning'], ['Demo', '1:1', 'Retro'], [], ['Offsite']];
  return (
    <Bd label="Month with agenda" className={c.cal}>
      <div className={c.weekS} role="group" aria-label="Days">{[1, 2, 3, 4, 5].map((x, k) => <button key={x} type="button" aria-pressed={d === k} onClick={() => setD(k)}><b>{x}</b></button>)}</div>
      {E[d].length ? E[d].map((e) => <span key={e} className={c.cd}>{e}</span>) : <small className={c.m}>Free day</small>}
    </Bd>
  );
}
