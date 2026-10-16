import { useDrag } from '../../stage/hooks';
import c from './cockpit.module.css';

/* 20 */ export function CourseDeviation() {
  const [v, bind] = useDrag({ init: 0.62 });
  return (
    <div className={c.hsi} {...bind} aria-label="Course deviation, drag sideways" aria-valuetext={`${Math.round((v - 0.5) * 20) / 10} dots`} style={{ ...bind.style, '--v': v }}>
      <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" className={c.ring} />{[-2, -1, 1, 2].map((k) => <circle key={k} cx={50 + k * 12} cy="50" r="2" className={c.dot} />)}<path d="M50 12v76" className={c.course} /><path d="M50 12l-5 9h10z" className={c.bug} /></svg>
      <i />
    </div>
  );
}
