import { pad2, useDrag } from '../../stage/hooks';
import c from './checkout.module.css';
import { $, Co } from './shared';

/* 42 */ export function PlanChange() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5 });
  const day = Math.round(1 + v * 29);
  const left = 30 - day;
  return (
    <Co label="Plan change" className={c.center}>
      <span className={c.m}>Switch on day {day}</span>
      <div className={c.rail} {...bind} aria-label="Day of the month"><u style={{ left: `${v * 100}%` }} /></div>
      <b className={c.big}>{$(((99 - 29) * left) / 30)}</b><small className={c.m}>charged today · {pad2(left)} days left</small>
    </Co>
  );
}
