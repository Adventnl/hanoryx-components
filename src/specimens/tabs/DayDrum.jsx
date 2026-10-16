import { useDrag } from '../../stage/hooks';
import c from './tabs.module.css';

/* 21 */ export function DayDrum() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.5, steps: 6 });
  const k = 6 - Math.round(v * 6);
  const names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div className={c.drum} {...bind} aria-label="Day drum, drag or use arrows" aria-valuetext={names[k]} style={{ ...bind.style, '--k': k }}>
      <ol>{names.map((n) => <li key={n}>{n}</li>)}</ol>
    </div>
  );
}
