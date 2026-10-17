import { useState } from 'react';
import c from "../boards.module.css";
import { Bd, DAYS } from "../shared";

/* 34 */ export function HabitWeek() {
  const [on, setOn] = useState({ '0-0': 1, '0-1': 1, '0-2': 1, '1-1': 1, '1-3': 1 });
  const flip = (id) => setOn((a) => ({ ...a, [id]: a[id] ? 0 : 1 }));
  return (
    <Bd label="Habit week" className={c.habits}>
      {['Read', 'Run'].map((h, r) => <div key={h}><small>{h}</small>{DAYS.map((d, k) => { const id = `${r}-${k}`; return <button key={id} type="button" aria-pressed={!!on[id]} aria-label={`${h}, day ${k + 1}`} onClick={() => flip(id)} />; })}</div>)}
      <small className={c.m}>{Object.values(on).filter(Boolean).length} done</small>
    </Bd>
  );
}
