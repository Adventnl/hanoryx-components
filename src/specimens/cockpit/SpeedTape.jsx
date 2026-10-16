import { useCycle } from '../../stage/hooks';
import c from './cockpit.module.css';

/* 35 */ export function SpeedTape() {
  const k = useCycle(8, 1500);
  const spd = 90 + k * 6;
  return <div className={c.tape} role="img" aria-label={`Speed ${spd} knots`} style={{ '--s': (spd - 60) / 5 }}><ol>{Array.from({ length: 24 }, (_, i) => 60 + i * 5).map((n) => <li key={n} data-big={n % 10 === 0}>{n % 10 === 0 ? n : ''}</li>)}</ol><i /><b>{spd}</b></div>;
}
