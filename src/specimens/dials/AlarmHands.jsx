import { useDrag } from '../../stage/hooks';
import c from './dials.module.css';

/* 21 */ export function AlarmHands() {
  const [v, bind] = useDrag({ mode: 'r', range: 360, init: 0.25 });
  const mins = Math.round(v * 720);
  const hh = Math.floor(mins / 60) % 12 || 12;
  return (
    <div className={c.alarm} {...bind} aria-label="Alarm hands" style={{ ...bind.style, '--v': v }}>
      <i /><b /><span>{hh}:{String(mins % 60).padStart(2, '0')}</span>
    </div>
  );
}
