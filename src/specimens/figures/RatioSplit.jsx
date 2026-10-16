import { useDrag } from '../../stage/hooks';
import c from './figures.module.css';

/* 40 */ const gcd = (a, b) => (b ? gcd(b, a % b) : a);

export function RatioSplit() {
  const [v, bind] = useDrag({ init: 0.35, steps: 18 });
  const a = 1 + Math.round(v * 18);
  const b = 20 - a;
  const g = gcd(a, b);
  return (
    <div className={c.fig}>
      <div className={c.ratio} style={{ '--a': a }}><i><b>{a}</b></i><i><b>{b}</b></i></div>
      <div className={c.slide} {...bind} aria-label="Split between the two sides, drag to change it" style={{ ...bind.style, '--v': v }}><i /></div>
      <output className={c.sub}>{a}:{b} = <b>{a / g}:{b / g}</b></output>
    </div>
  );
}
