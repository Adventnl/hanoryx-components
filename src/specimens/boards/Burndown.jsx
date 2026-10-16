import { useState } from 'react';
import c from './boards.module.css';
import { Bd } from './shared';

/* 28 */ export function Burndown() {
  const [day, setDay] = useState(5);
  const act = [10, 9.2, 8.4, 7.1, 6.6, 5.2, 4.8, 3.1, 2.4, 1.2, 0].slice(0, day + 1);
  const px = (i) => 8 + i * 9.4; const py = (v) => 6 + (1 - v / 10) * 40;
  return (
    <Bd label="Burndown" className={c.center}>
      <svg viewBox="0 0 110 52" className={c.burn} aria-hidden="true"><path d={`M${px(0)} ${py(10)}L${px(10)} ${py(0)}`} className={c.ideal} /><path d={act.map((v, i) => `${i ? 'L' : 'M'}${px(i)} ${py(v)}`).join('')} className={c.actual} /></svg>
      <div className={c.pair}><small className={c.m}>Day {day}</small><button type="button" className={c.add} onClick={() => setDay((v) => (v >= 10 ? 1 : v + 1))}>Next day</button></div>
    </Bd>
  );
}
