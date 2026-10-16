import { pad2, useTick } from '../../stage/hooks';
import c from './heroes.module.css';
import { Sc } from './shared';

/* 28 */ export function LaunchClock() {
  const n = useTick(1000);
  const s = 4 * 3600 + 12 * 60 - n;
  return <Sc label="Launch countdown" className={c.cen} role="timer"><small>Launching in</small><div className={c.digits}>{[Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60].map((v, k) => <b key={k}>{pad2(v)}</b>)}</div></Sc>;
}
