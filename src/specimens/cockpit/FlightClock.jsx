import { useTick } from '../../stage/hooks';
import c from './cockpit.module.css';

/* 25 */ export function FlightClock() {
  const t = useTick(1000);
  const s = 41 * 60 + 18 + t;
  return <div className={c.clock} role="timer" aria-label="Flight time"><b>FT</b><output>{String(Math.floor(s / 3600)).padStart(2, '0')}:{String(Math.floor((s % 3600) / 60)).padStart(2, '0')}:{String(s % 60).padStart(2, '0')}</output></div>;
}
