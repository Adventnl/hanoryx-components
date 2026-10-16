import { useCycle } from '../../stage/hooks';
import c from './cockpit.module.css';

/* 36 */ export function AltitudeTape() {
  const k = useCycle(8, 1700);
  const alt = 3200 + k * 100;
  return <div className={`${c.tape} ${c.altTape}`} role="img" aria-label={`Altitude ${alt} feet`} style={{ '--s': (alt - 3000) / 40 }}><ol>{Array.from({ length: 24 }, (_, i) => 3000 + i * 40).map((n) => <li key={n} data-big={n % 200 === 0}>{n % 200 === 0 ? n : ''}</li>)}</ol><i /><b>{alt}</b></div>;
}
