import { useDrag } from '../../stage/hooks';
import c from './checkout.module.css';
import { $, Co } from './shared';

/* 04 */ export function UsageSlider() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.3 });
  const gb = Math.round(10 + v * 990);
  return (
    <Co label="Usage" className={c.center}>
      <span className={c.m}>{gb} GB a month</span>
      <div className={c.rail} {...bind} aria-label="Storage"><u style={{ left: `${v * 100}%` }} /></div>
      <b className={c.big}>{$(Math.ceil(gb / 50) * 2)}<small>/mo</small></b>
    </Co>
  );
}
